import requester, { getBaseURL, getClientBaseURL } from "lib/api/requester";

//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = `${getClientBaseURL()}`;

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://jsonplaceholder.typicode.com</loc>
     </url>
     <url>
       <loc>https://jsonplaceholder.typicode.com/guide</loc>
     </url>
     ${posts.questions
       .map(({ slug }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/questions/${slug}`}</loc>
       </url>
     `;
       })
       .join('')}

       ${posts.tags
         .map(({slug}) => {
            return `
            <url>
           <loc>${`${EXTERNAL_DATA_URL}/questions/tag/${slug}`}</loc>
       </url>
            `;
         }).join('')
       }
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const allQuestions = await requester.getSync(`/getallquestionsforseo`);
  const allTags = await requester.getSync(`/getalltagsforseo`);
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap({questions: allQuestions, tags: allTags});

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
