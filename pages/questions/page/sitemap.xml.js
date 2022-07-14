import requester, { getBaseURL, getClientBaseURL } from "lib/api/requester";

//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = `${getClientBaseURL()}`;

function generateSiteMap(posts) {

 

  let urlArray = [];
    for(let i = 1; i <= Math.ceil(posts.questionPagination.count/5); i++){
        urlArray.push(`${EXTERNAL_DATA_URL}/questions/page/${i}`)
    }

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
       ${urlArray.map((url) => {
        return `
        <url>
            <loc>${url}</loc>
        </url>
      `;
     }).join()}


   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  
  const allCountQuestion = await requester.getSync(`/countallquestion`);
  
  
  // We generate the XML sitemap with the posts data
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap({questionPagination: allCountQuestion});

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
