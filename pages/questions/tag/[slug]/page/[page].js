
import PostLayout from 'components/Common/PostLayout';
import TagWidgetPost from 'components/Common/TagWidgetPost';
import Layout from 'components/Layout';

import { decode } from 'html-entities';
import requester from 'lib/api/requester';
import { useQuestions, useQuestionsByTag } from 'lib/hook';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'



export default function QuestionTags({ data, slug, page, answers, randomTags }) {
  const router = useRouter();
  const query = router.query;

  return (
    <Layout>
      <NextSeo
        title={`${slug} tags`}
        description={`All questions and solutions for ${slug} tags - page ${page}`}
      />

      <div className='pagination-page-wrapper'>
        {data && (page <= 1) ? <span className={`pagination-buttons previous bg-stone-500 cursor-not-allowed  hover:bg-stone-500 text-white font-bold py-2 px-4 rounded`}>Previous</span> : <Link href={`/questions/tag/${slug}/page/${page - 1}`} ><a className={`pagination-buttons previous bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>Previous</a></Link>}
      </div>
      {data && data.rows?.map(({ slug, title, tags, id }, index) => {
        return (


          <PostLayout key={index} slug={slug} answers={answers[id]} tags={tags} title={title}></PostLayout>


        )
      })}

      <div className='pagination-page-wrapper'>
        {data && (((page) * 5 - data.count) >= 0) ? <span className={`pagination-buttons next bg-stone-500 cursor-not-allowed  hover:bg-stone-500 text-white font-bold py-2 px-4 rounded`}>Next</span> : <Link href={`/questions/tag/${slug}/page/${page + 1}`} ><a className={`pagination-buttons next bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>Next</a></Link>}
      </div>

      <TagWidgetPost data={randomTags} />
    </Layout>
  )
}

export const getStaticProps = async (ctx) => {
  try {
    let page = ctx.params.page;
    const data = await requester.getSync(`/questions/tag/${ctx.params.slug}`);
    const rows = data.rows;
    const answers = {};
    for (let i = 0; i < rows.length; i++) {
      const answer = await requester.getSync(`/answer/question/${rows[i].id}`);
      answers[rows[i].id] = answer.answer;
    }

    const randomTags = await requester.getSync(`/randomkeyword`);
    return {
      props: {
        data: data,
        slug: ctx.params.slug,
        page: page,
        answers,
        randomTags
      },
      revalidate: 6000

    }
  } catch (err) {
    return {
      props: {

      },
      revalidate: 6000
    }
    console.log(err);
  }
}


export async function getStaticPaths() {
  const data = await requester.getSync(`/getalltagslugbypagination`);
  const paths = [];
  Object.keys(data).map((el) => {
    for(let i = 0; i < data[el].length; i++){
      paths.push({params: {slug: String(el), page: String(data[el][i])}});
    }
  }) 
  console.log(paths);
  return {
    paths,
    fallback: false
  }
}