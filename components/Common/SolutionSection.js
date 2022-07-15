import React from 'react'

import { decode } from 'html-entities';
import SolutionPagination from './SolutionPagination';
import TagsSection from './TagsSection';

export default function SolutionSection({answers, keywords}) {

  const hrefs = answers.map((ans, index) => {return `#solution${index+1}`})
  return <div className='solution-section'>
    <SolutionPagination hrefs={hrefs}/>
  {
    answers.map((ans, index) => {
        return <div id={`solution${index+1}`} key={index} className='flex mt-5 answer items-center justify-center py-5'>
        
      <div className="rounded-xl solution-inner border md:px-10 md:py-10 px-2 py-10 shadow-md bg-white">
        
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <h1 className='text-4xl font-semibold mb-5'>{`Solution ${index + 1}`}</h1>
      <TagsSection data={keywords}/>
      </div>
        
      <div className=" items-center justify-between">
              <div className=" space-x-4 md:space-x-8" dangerouslySetInnerHTML={{__html: decode(ans)}}></div>
            </div>

        
      </div>
    </div>
      })
  }
</div>
  
  
}
