import Layout from 'components/Layout';
import { QuestionStyled } from 'components/Utils/sharedstyles';
import { decode } from 'html-entities';
import requester from 'lib/api/requester';
import { useQuestions, useQuestionsByTag } from 'lib/hook';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import TopBarProgress from 'react-topbar-progress-indicator';



export default function QuestionTags({data}) {
    const router = useRouter();
    const query = router.query;

    return (
        <Layout>
        {data ? data.rows?.map(({ slug, title, tags, answer }, index) => {
          return (
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
                          tags.map((el, index) => {
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
          )
        }) : <TopBarProgress/>}
      </Layout>
    )
}

export const getStaticProps = async (ctx) => {
    try {
      const posts = await requester.getSync(`/questions/tag/${ctx.params.slug}`)
      return {
        props: {
          data: posts
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
    const allTags = await requester.getSync(`/getalltagsforseo`);
    const paths = allTags.map((tag) => {
      return {
        params: { slug: tag.slug }
      }
    });
  
    return {
      paths,
      fallback: true
    }
  }