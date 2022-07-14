import PostLayout from 'components/Common/PostLayout';
import QuestionWidgetPost from 'components/Common/QuestionWidgetPost';
import Layout from 'components/Layout';
import requester from 'lib/api/requester';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react'

export default function QuestionOnPage({data, page, answers, randomQuestions}) {
    return (
        <Layout> 
          <NextSeo
          title={undefined}
          description={`Questions - page ${page}`}
        />
            <div className='inner-content'>
            <div className='pagination-page-wrapper'>
              {data && (page <= 1) ? <span className={`pagination-buttons previous bg-stone-500 cursor-not-allowed  hover:bg-stone-500 text-white font-bold py-2 px-4 rounded`}>Previous</span> : <Link href={`/questions/page/${Number(page)-1}`} ><a className={`pagination-buttons previous bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>Previous</a></Link>}
            </div>
            {data && (data.rows?.map(({ slug, title, tags, id }, index) => {
              return (
                <>
                  <PostLayout key={index} slug={slug} answers={answers[id]} tags={tags} title={title}></PostLayout>
              
              </>
              )
            }))}
            <div className='pagination-page-wrapper'>
              {data && (((page) * 5 - data.count) >= 0) ? <span className={`pagination-buttons next bg-stone-500 cursor-not-allowed  hover:bg-stone-500 text-white font-bold py-2 px-4 rounded`}>Next</span> : <Link href={`/questions/page/${Number(page)+1}`} ><a className={`pagination-buttons next bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>Next</a></Link>}
            </div>
            </div>
          <QuestionWidgetPost data={randomQuestions}/>
      </Layout>
    )
}

export const getStaticProps = async (ctx) => {
    try{
    let page = ctx.params.page;
    const data = await requester.getSync(`/questions?page=${page}`);
    const answers = {};
    const rows = data.rows;
    for(let i = 0; i< rows.length; i++){
      const answer = await requester.getSync(`/answer/question/${rows[i].id}`);
      answers[rows[i].id] = answer.answer;
    }
    const randomQuestions = await requester.getSync(`/randomquestion`);
    return {
      props: {
       data: data,
       answers: answers,
       page: page,
       randomQuestions
      },
      
    }
    }catch(err){
      console.log(err);
      return {
        props: {

        }
      }
    }
}

export async function getStaticPaths() {
    const allCountQuestion = await requester.getSync(`/countallquestion`);
    const paramsArray = [];
    for(let i = 1; i <= Math.ceil(allCountQuestion.count/5); i++){
        paramsArray.push({
            params: {
                page: String(i)
            }
        })
    }
  
    return {
      paths: paramsArray,
      fallback: false
    }
  }