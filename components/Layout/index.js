import Header from "./Header";
import React from 'react'
import Head from "next/head";
export default function Layout({children}) {
  const onBackTop = () => {
    if(document){
      if(document.querySelector(".ant-modal")){
        document.querySelector(".ant-modal").scrollIntoView({behavior: 'smooth', block: 'start'});
      }
      else{
        document.querySelector("html").scrollIntoView({behavior: 'smooth', block: 'start'})
      }
      
    }
  }
  return (
    <div className='wrapper'>
        <Head>
        </Head>

        <Header/>

        <div className='main-content'>
            {
                children
            }
        </div>

      
       <span className="cursor-pointer text-lg p-2" style={{position: 'fixed', bottom: '20px', left: '20px', background: "#000", zIndex: '2000', color: 'white'}} onClick={onBackTop}>
          Go go top
       </span>
    
    </div>    
  )
}
