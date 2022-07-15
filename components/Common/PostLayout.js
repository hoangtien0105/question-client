import Head from 'next/head'

import requester from 'lib/api/requester'

import Showdown from 'showdown'
import { useState, useEffect } from 'react';
import 'highlight.js/styles/vs2015.css';
import Link from 'next/link'

import { useRouter } from 'next/router'
import SolutionPopup from 'components/Common/SolutionPopup';
import TagsSection from './TagsSection';

const converter = new Showdown.Converter();



export default function PostLayout({ slug, title, tags, answers }) {
    const [isShowSolution, setIsShowSolution] = useState(false);
    
    return (
        <>
        <div className="question my-5">
            <div className='flex items-center justify-center'>
             
                <div className="rounded-xl border p-5 shadow-md post-layout-inner bg-white">
                    <div className="flex w-full items-center justify-between border-b pb-3">
                        <div className="flex items-center space-x-3">
                            <div className="text-lg font-bold text-slate-700">
                                <Link href={`/questions/${slug}`}><a>
                                    {title}
                                </a>
                                </Link>
                            </div>
                        </div>
                        
                    </div>

                    
                    <div className="tags-wrap h-max  space-x-8">
                    <TagsSection data={tags}/>
                        {/* <div className='tags'> 
                            {
                                tags.length ? tags?.map((el, index) => {
                                    return <Link key={index} href={`/questions/tag/${el.slug}`}><a className="rounded-2xl border bg-neutral-100 px-3 py-1 text-sm font-semibold whitespace-nowrap">{el.name}</a></Link>
                                }) : <></>
                            }
                            </div> */}
                            {/* <div className="text-xs text-neutral-500">2 hours ago</div> */}
                    </div>

                    
                    
                    <div>
                        <div className="flex items-center justify-between text-slate-500">
                            <div className="flex space-x-4 md:space-x-8">
                            <span onClick={() => {setIsShowSolution(true)}} className={`btn bg-stone-500 cursor-pointer mt-5  hover:bg-stone-500 text-white font-bold py-2 px-4 rounded`}>Show Solution</span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        {isShowSolution && <SolutionPopup title={title} tags={tags} onClose={() => {setIsShowSolution(false)}} answers={answers}/>}
        </>

    )

}

