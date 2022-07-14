import Link from 'next/link'
import React from 'react'

export default function TagWidgetPost({data}) {
  return (
    <div className='widget'>
       {
        data && data.map((el, index) => {
            return <Link prefetch={false} key={index} href={`/questions/tag/${el.slug}`}>
                <a>
                  
                        {el.name}
                   
                </a>

            </Link>
        })
       }
    </div>
  )
}
