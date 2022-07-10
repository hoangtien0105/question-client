import Layout from 'components/Layout';
import { QuestionStyled } from 'components/Utils/sharedstyles';
import { decode } from 'html-entities';
import requester from 'lib/api/requester';
import { useQuestions, useQuestionsByTag } from 'lib/hook';
import { useWindowDimensions } from 'lib/util';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring';
import TopBarProgress from 'react-topbar-progress-indicator';
import { useMeasure } from 'react-use';
import styled from 'styled-components';

const QuestionHeader = styled.div`
  code{
    padding: 5px;
    color: hsl(210deg 8% 15%);
    background-color: hsl(210deg 8% 90%);
    border-radius: 3px;
  }
`

const Comment = styled(animated.div)`
   .comment-item{
    .comment-body{
      .d-inline-flex.ai-center{
        text-align: right;
      }
      .comment-date{
        float: right;
      }
    }
   }
`

const Solution = styled.div`
    

`

export default function QuestionPost({ data }) {
  const router = useRouter();
  const [commentStyles, api] = useSpring(() => ({
    config: {
      frequency: 200
    } 
  }));
  const [isShowMoreComment, setIsShowMoreComment] = useState(false);
  return (
    <Layout>
      {data ? (<QuestionStyled className="question my-5">

        <QuestionHeader className='flex question-header items-center justify-center'>
          <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
            <div className="flex w-full items-center justify-between border-b pb-3">
              <div className="flex items-center space-x-3">
                <div className="text-lg font-bold text-slate-700">
                  <Link href={`/questions/${data.slug}`}><a>
                    {data.title}
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
                {/* <div className="text-xs text-neutral-500">2 hours ago</div> */}
              </div>
            </div>
             
             <div className='question-content mt-5' dangerouslySetInnerHTML={{__html: decode(data.content)}}>

             </div>
          </div>
        </QuestionHeader>
        {/* <Comment style={commentStyles} className='flex text-xs pl-10 flex-col comment items-center justify-center'>
        <h4 className='text-left mt-10 text-lg font-semibold'>Comments</h4>
          {
            commentArrays.map((cmt, index) => {
                return <>
                  <div key={index} className='comment-item w-9/12 border-t divide-y-8' dangerouslySetInnerHTML={{__html: decode(cmt)}}>
                    
                    </div>
                    <span className='divide-x-8
                    '></span>
                </>
            })
          }
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setIsShowMoreComment(!isShowMoreComment);}}>{isShowMoreComment ? 'Less more' : 'See more'}</button>
        </Comment> */}
        

        <Solution>
          {
            data.answer.map((ans, index) => {
              return <div key={index} className='flex mt-5 answer items-center justify-center py-5'>
              
            <div className="rounded-xl border p-10 shadow-md w-9/12 bg-white">
            <h4 className='text-4xl font-semibold mb-5'>{`Solution ${index + 1}`}</h4>

              
            <div className=" items-center justify-between">
                    <div className=" space-x-4 md:space-x-8" dangerouslySetInnerHTML={{__html: decode(ans)}}></div>
                  </div>

              
            </div>
          </div>
            })
          }
        </Solution>
        {/* <QuestionContent dangerouslySetInnerHTML={{__html: el.attributes.content}}>
                </QuestionContent> */}
      </QuestionStyled>) : <TopBarProgress/>}

    </Layout>
  )
}

export const getStaticProps = async (ctx) => {
  try {
    const post = await requester.getSync(`/questions/${ctx.params.slug}`)
    if(!post){
      return {
        notFound: true
      }
    }
    return {
      props: {
        data: post
      },
      revalidate: 10,
    }
  } catch (err) {

    return {
      props: {

      },
      revalidate: 10,
    }
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
    fallback: true
  }
}