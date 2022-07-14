import '../styles/globals.css'
import 'highlight.js/styles/vs2015.css';
import { DefaultSeo } from 'next-seo';
import { siteName } from 'constants/seo';
import SEOConfig from 'seo.config';
import { useRouter } from 'next/router';
// import GlobalStyle from '../components/Utils/globalstyles'

function MyApp({ Component, pageProps }) {

  const router = useRouter();
   
  return <>
    
      <DefaultSeo
      canonical={router.pathName}
      {...SEOConfig}
      />
      <Component {...pageProps} />
      
  </>
}

export default MyApp
