import Link from 'next/link'
import React from 'react'

export default function QuestionWidgetPost({data}) {
  return (
    <div className='widget'>
       {
        data && data.map((el, index) => {
          return <Link prefetch={false} key={index} href={`/questions/${el.slug}`}>
              <a>
                
                      {el.title}
                
              </a>

          </Link>
      })
       }
    </div>
  )
}
