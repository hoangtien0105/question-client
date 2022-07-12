import React from 'react'

import { decode } from 'html-entities';
import SolutionPagination from './SolutionPagination';

export default function SolutionSection({answers}) {
    if(answers){
      const hrefs = answers.map((ans, index) => {return `#solution${index+1}`})
        return <div className='solution-section'>
          <SolutionPagination hrefs={hrefs}/>
        {
          answers.map((ans, index) => {
              return <div id={`solution${index+1}`} key={index} className='flex mt-5 answer items-center justify-center py-5'>
              
            <div className="rounded-xl solution-inner border md:px-10 md:py-10 px-2 py-10 shadow-md bg-white">
            <h4 className='text-4xl font-semibold mb-5'>{`Solution ${index + 1}`}</h4>

              
            <div className=" items-center justify-between">
                    <div className=" space-x-4 md:space-x-8" dangerouslySetInnerHTML={{__html: decode(ans)}}></div>
                  </div>

              
            </div>
          </div>
            })
        }
  </div>
    }
    else{
       return (
        <div style={{width: '100%', height: '20vh'}}>

        </div>
       )
    }
  
}
