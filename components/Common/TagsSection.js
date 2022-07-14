import Link from 'next/link'
import React from 'react'

export default function TagsSection({data}) {
  return (
    <div className="tags-wrap h-max  space-x-8">
                        <div className='tags'> 
                            {
                                data?.length ? data?.map((el, index) => {
                                    return <Link key={index} href={`/questions/tag/${el.slug}`}><a className="rounded-2xl border bg-neutral-100 px-3 py-1 text-sm font-semibold whitespace-nowrap">{el.name}</a></Link>
                                }) : <></>
                            }
                            </div>
                            {/* <div className="text-xs text-neutral-500">2 hours ago</div> */}
                    </div>
  )
}
