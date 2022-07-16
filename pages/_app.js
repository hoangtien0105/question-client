import '../styles/globals.css'
import 'highlight.js/styles/vs2015.css';
import { DefaultSeo } from 'next-seo';
import { siteName, siteUrl } from 'constants/seo';
import SEOConfig from 'seo.config';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
// import GlobalStyle from '../components/Utils/globalstyles'

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  useEffect(() => {
    if(document && window){
      document.querySelectorAll("a").forEach((el) => {
        if(el.href.indexOf(siteUrl) < 0){
          el.rel = 'nofollow noreferrer';
          el.target = '__blank';
        }
      }) 
    }

    
  }, [])
  useEffect(() => {
    if(document && window){
      document.querySelectorAll("a").forEach((el) => {
        if(el.href.indexOf(siteUrl) < 0){
          el.rel = 'nofollow noreferrer';
          el.target = '__blank';
        }
      })
      
    }
  }, [router.pathname])
  return <>
      <DefaultSeo
      {...SEOConfig}
      />
      <Component {...pageProps} />
      
  </>
}

export default MyApp
