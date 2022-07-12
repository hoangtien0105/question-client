import React from 'react'


export default function SolutionPagination({hrefs, marginTop = '10px', width}) {

  

  const onPagination = (ev) => {
    if(document){
      document.querySelector(ev.target.getAttribute("data-id")).scrollIntoView({behavior: 'smooth'})
    }
  }
  return (
    
<nav className='flex pagination-solution flex-col justify-end'>
  <ul className="inline-flex -space-x-px overflow-auto">
    {hrefs?.length && hrefs.map((href, index) => {
        return <li className="pagination-solution-item" key={index}>
        <span data-id={href} onClick={onPagination} className="cursor-pointer py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{index+1}</span>
      </li>
    })}
  </ul>

</nav>

  )
}
