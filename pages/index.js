import Head from 'next/head'

import requester from '../lib/api/requester'

import Showdown from 'showdown'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'highlight.js/styles/vs2015.css';
import { QuestionContent, QuestionStyled } from '../components/Utils/sharedstyles'
import Link from 'next/link'

import { decode } from 'html-entities'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import TopBarProgress from 'react-topbar-progress-indicator'
import { NextSeo } from 'next-seo';
import { siteDescription, siteName } from 'constants/seo';

const converter = new Showdown.Converter();

const HomePageStyles = styled.div`

 

  pre{
    overflow: auto;
  }

`

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
            {data ? (data.rows?.map(({ slug, title, tags, answer }, index) => {
              return (
                <>
                  <QuestionStyled key={index} className="question my-5">
                  
                  <div className='flex items-center justify-center'>
                    
                    <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
                      <div className="flex w-full items-center justify-between border-b pb-3">
                        <div className="flex items-center space-x-3">
                          <div className="text-lg font-bold text-slate-700">
                            <Link href={`/questions/${slug}`}><a>
                              {title}
                            </a>
                            </Link>
                          </div>
                        </div>
                        <div className="flex flex-wrap h-auto justify-end items-center space-x-8">
                          {
                            tags.length && tags?.map((el, index) => {
                              return <Link key={index} href={`/questions/tag/${el.slug}`}><a className="rounded-2xl border bg-neutral-100 px-3 py-1 text-sm font-semibold">{el.name}</a></Link>
                            })
                          }
                          {/* <div className="text-xs text-neutral-500">2 hours ago</div> */}
                        </div>
                      </div>

                      <div className="mt-4 mb-6" style={{ height: 100, overflow: 'auto' }}>
                        {/* <div className="mb-3 text-xl font-bold">Nulla sed leo tempus, feugiat velit vel, rhoncus neque?</div> */}
                        <h4 className='font-semibold'>Solution 1:</h4>
                          <div className="text-sm bg-green-100 text-neutral-600" dangerouslySetInnerHTML={{ __html: decode(answer[0]) }}></div>
                      
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between text-slate-500">
                          <div className="flex space-x-4 md:space-x-8">

                            <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                              <svg xmlns="http://www.w3.org/2000/svg" className="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                              </svg>
                              <span>4</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                {/* <QuestionContent dangerouslySetInnerHTML={{__html: el.attributes.content}}>
                    </QuestionContent> */}
              </QuestionStyled>
              
              </>
              )
            })) : <TopBarProgress/>}
            {data && (((page) * 10 - data.count) >= 0) ? <span className={`pagination-buttons next bg-stone-500 cursor-not-allowed  hover:bg-stone-500 text-white font-bold py-2 px-4 rounded`}>Next</span> : <Link href={`/questions?page=${page+1}`} ><a className={`pagination-buttons next bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>Next</a></Link>}
            </div>

    </Layout>
  )
 
}

export const getStaticProps = async (ctx) => {
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