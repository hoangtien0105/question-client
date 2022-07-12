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
import Loading from 'components/Common/Loading';





export default function Home({data, page}) {
  const [isRender, setIsRender] = useState(false);
  const [answerPreviewWidth, setAnswerPreviewWidth] = useState('869.25');
  const [answerPreviewHeight, setAnswerPreviewHeight] = useState(100);
  const router = useRouter();
  const query = router.query;
  return (
    <Layout>
      <NextSeo
        twitter={{
          cardType: 'summary_large_image',
          site:'@solutionschecker.com',
          handle: '@solutionchecker.com'
        }}
      />
     <div className='inner-content'>
            {data && (page <= 1) ? <span className={`pagination-buttons previous bg-stone-500 cursor-not-allowed  hover:bg-stone-500 text-white font-bold py-2 px-4 rounded`}>Previous</span> : <Link href={`/questions?page=${page-1}`} ><a className={`pagination-buttons previous bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>Previous</a></Link>}
            {data ? (data.rows?.map(({ slug, title, tags, id }, index) => {
              return (
            
                  <PostLayout key={index} slug={slug} questionId={id} tags={tags} title={title}></PostLayout>
              
             
              )
            })) : <Loading/>}
            {data && (((page) * 10 - data.count) >= 0) ? <span className={`pagination-buttons next bg-stone-500 cursor-not-allowed  hover:bg-stone-500 text-white font-bold py-2 px-4 rounded`}>Next</span> : <Link href={`/questions?page=${page+1}`} ><a className={`pagination-buttons next bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>Next</a></Link>}
            </div>
            
    </Layout>
  )
 
}

export const getServerSideProps = async (ctx) => {
  let page = 1;
    if(ctx?.query?.page){
      page = Number(ctx.query.page);
    }
    const queryParms = new URLSearchParams('');
    queryParms.append('page', page)
    const data = await requester.getSync(`/questions?${queryParms.toString()}`);
    return {
      props: {
       data: data,
       page: page
      },  
    }
}