import requester, { getBaseURL, getClientBaseURL } from "lib/api/requester";

//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = `${getClientBaseURL()}`;

function generateSiteMap(posts) {

  const tagsUrlPaginationArray = [];
  Object.keys(posts.tagsPagination).map((el) => {
    for(let i = 0; i < posts.tagsPagination[el].length; i++){
      tagsUrlPaginationArray.push(`${EXTERNAL_DATA_URL}/questions/tag/${el}/page/${String(posts.tagsPagination[el][i])}`)
    }
  }) 


  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     
   

       ${posts.tags
         .map(({slug}) => {
            return `
            <url>
           <loc>${`${EXTERNAL_DATA_URL}/questions/tag/${slug}`}</loc>
       </url>
            `;
         }).join('')
       }

     

     ${tagsUrlPaginationArray.map((url) => {
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
  const allTags = await requester.getSync(`/getalltagsforseo`);
  const allTagsPagination = await requester.getSync(`/getalltagslugbypagination`);
  
  // We generate the XML sitemap with the posts data
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap({tags: allTags, tagsPagination: allTagsPagination});

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
