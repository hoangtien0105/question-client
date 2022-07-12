import Loading from 'components/Common/Loading';
import PostLayout from 'components/Common/PostLayout';
import Layout from 'components/Layout';

import { decode } from 'html-entities';
import requester from 'lib/api/requester';
import { useQuestions, useQuestionsByTag } from 'lib/hook';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'



export default function QuestionTags({data, slug}) {
    const router = useRouter();
    const query = router.query;

    return (
        <Layout>
          <NextSeo
        title={`${slug} tags`}
        description={`All questions and solutions for ${slug} tags`}
        />
        {data ? data.rows?.map(({ slug, title, tags, id }, index) => {
          return (
            <>
            
        <PostLayout key={index} slug={slug} questionId={id} tags={tags} title={title}></PostLayout>
            </>
           
          )
        }) : <Loading />}

  
      </Layout>
    )
}

export const getServerSideProps = async (ctx) => {
    try {
      const posts = await requester.getSync(`/questions/tag/${ctx.params.slug}`)
      return {
        props: {
          data: posts,
          slug: ctx.params.slug
        },
       
      }
    } catch (err) {
  
      return {
        props: {
  
        },
       
      }
    }
  
  
  }
  
