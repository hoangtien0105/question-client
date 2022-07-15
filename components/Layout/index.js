import Header from "./Header";
import React from 'react'
import Head from "next/head";
export default function Layout({ children }) {
  const onBackTop = () => {
    if (document) {
      if (document.querySelector(".ant-modal")) {
        document.querySelector(".ant-modal").scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      else {
        document.querySelector("html").scrollIntoView({ behavior: 'smooth', block: 'start' })
      }

    }
  }
  return (
    <div className='wrapper'>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Header />

      <div className='main-content'>
        {
          children
        }
      </div>


      <span className="cursor-pointer text-lg p-2" style={{ position: 'fixed', bottom: '20px', left: '20px', background: "#000", zIndex: '2000', color: 'white' }} onClick={onBackTop}>
        Go go top
      </span>

    </div>
  )
}
