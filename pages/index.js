import Head from 'next/head'

import requester from '../lib/api/requester'

import Showdown from 'showdown'
import { useState, useEffect } from 'react';
import 'highlight.js/styles/vs2015.css';
import Link from 'next/link'

import { decode } from 'html-entities'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import { NextSeo } from 'next-seo';
import { siteDescription, siteName } from 'constants/seo';
import PostLayout from 'components/Common/PostLayout';
import QuestionWidgetPost from 'components/Common/QuestionWidgetPost';

export default function Home({data, page, answers, randomQuestions}) {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>{siteName}</title>
        
      </Head>
      <NextSeo
        twitter={{
          cardType: 'summary_large_image',
          site:'@solutionschecker.com',
          handle: '@solutionchecker.com'
        }}
      />
     <div className='inner-content'>
            <div className='pagination-page-wrapper'>
              {data && (page <= 1) ? <span className={`pagination-buttons previous bg-stone-500 cursor-not-allowed  hover:bg-stone-500 text-white font-bold py-2 px-4 rounded`}>Previous</span> : <Link href={`/questions/page/${Number(page)-1}`} ><a className={`pagination-buttons previous bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>Previous</a></Link>}
            </div>
            {data && (data.rows?.map(({ slug, title, tags, id }, index) => {
              return (
                  <PostLayout key={index} slug={slug} answers={answers[id]} tags={tags} title={title}></PostLayout>
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
    const data = await requester.getSync(`/questions?page=1`);
    const rows = data.rows;
    const answers = {};
    for(let i = 0; i< rows.length; i++){
      const answer = await requester.getSync(`/answer/question/${rows[i].id}`);
      answers[rows[i].id] = answer.answer;
    }

    const randomQuestions = await requester.getSync(`/randomquestion`);

    return {
      props: {
       data: data,
       page: 1,
       answers,
       randomQuestions
      },  
    }
  }catch(err){
    console.log(err);
  }
}