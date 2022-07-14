import Layout from 'components/Layout';
import { decode } from 'html-entities';
import requester from 'lib/api/requester';
import { useBreakpoint, useQuestions, useQuestionsByTag } from 'lib/hook';
import { NextSeo, QAPageJsonLd } from 'next-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import * as cheerio from 'cheerio';
import SolutionSection from 'components/Common/SolutionSection';
import QuestionWidgetPost from 'components/Common/QuestionWidgetPost';

export default function QuestionPost({ data, randomQuestions }) {
  const router = useRouter();
  return (
    <Layout>

      {data && (<div className="question my-5">
        <NextSeo
          title={data.title}
          description={cheerio.load(decode(data.content)).text()}
        />
        <QAPageJsonLd mainEntity={{
          name: data.title,
          text: cheerio.load(decode(data.content)).text(),
          answerCount: data.answer?.length || 4,
          upVoteCount: 500,
          suggestedAnswer: data.answer.length ? data.answer.map((el, index) => ({
            text: cheerio.load(decode(el)).text(),
            url: `${router.pathname}#solution${index + 1}`,
          })) : []
        }} />

        <div className='flex question-header items-center m-auto justify-center'>
          <div className="rounded-xl w-full border p-5 shadow-md bg-white">
            <div className="flex w-full items-center justify-between border-b pb-3">
              <div className="flex items-center space-x-3">
                <div className="text-lg font-bold text-slate-700">
                  <Link href={`/questions/${data.slug}`}><a>
                    <h1>{data.title}</h1>
                  </a>
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap h-auto justify-end items-center space-x-8">
                {
                  data.tags.map((el, index) => {
                    return <Link key={index} href={`/questions/tag/${el.slug}`}><a className="rounded-2xl border bg-neutral-100 px-3 py-1 text-sm font-semibold">{el.name}</a></Link>
                  })
                }
              </div>
            </div>

            <div className='question-content mt-5' dangerouslySetInnerHTML={{ __html: decode(data.content) }}>

            </div>
          </div>
        </div>


        <SolutionSection keywords={data.tags} marginTop={'30px'} answers={data.answer} />
       
      </div>)}
<QuestionWidgetPost data={randomQuestions}/>
    </Layout>
  )
}

export const getStaticProps = async (ctx) => {
  try {
    const post = await requester.getSync(`/questions/${ctx.params.slug}`);
    const randomQuestions = await requester.getSync(`/randomquestion`);
    if (!post) {
      return {
        notFound: true
      }
    }
    return {
      props: {
        data: post,
        randomQuestions
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      , // In seconds
    }
  } catch (err) {
    console.log(err);
  }


}

export async function getStaticPaths() {
  const allQuestions = await requester.getSync(`/getallquestionsforseo`);
  const paths = allQuestions.map((question) => {
    return {
      params: { slug: question.slug }
    }
  });

  return {
    paths,
    fallback: false
  }
}