import '../styles/globals.css'
import 'highlight.js/styles/vs2015.css';
import { DefaultSeo } from 'next-seo';
import { siteName, siteUrl } from 'constants/seo';
import SEOConfig from 'seo.config';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
// import GlobalStyle from '../components/Utils/globalstyles'

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  useEffect(() => {
    if(document && window){
      const externalLinks = [];
      document.querySelectorAll("a").forEach((el) => {
        const targetUrl = new URL(el.href);
        const mySiteUrl = new URL(window.location);
        console.log(targetUrl, mySiteUrl)
        if(targetUrl.hostname !== mySiteUrl.hostname){
          el.rel = 'nofollow noreferrer';
          el.target = '__blank';
        }
      })
      
    }
  }, [])
  useEffect(() => {
    if(document && window){
      const externalLinks = [];
      document.querySelectorAll("a").forEach((el) => {
        const targetUrl = new URL(el.href);
        const mySiteUrl = new URL(window.location);
        console.log(targetUrl, mySiteUrl)
        if(targetUrl.hostname !== mySiteUrl.hostname){
          el.rel = 'nofollow noreferrer';
          el.target = '__blank';
        }
      })
      
    }
  }, [router.pathname])
  return <>
    
      <DefaultSeo
      canonical={router.pathName}
      {...SEOConfig}
      />
      <Component {...pageProps} />
      
  </>
}

export default MyApp
