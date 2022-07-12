import Loading from 'components/Common/Loading';
import PostLayout from 'components/Common/PostLayout';
import Layout from 'components/Layout';
import { decode } from 'html-entities';
import requester from 'lib/api/requester';
import { useQuestions } from 'lib/hook';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'




export default function QuestionNews({data, page}) {
    const router = useRouter();
    const query = router.query;
    
    return (
        <Layout> 
          
            <div className='inner-content'>
            {data && (page <= 1) ? <span className={`pagination-buttons previous bg-stone-500 cursor-not-allowed  hover:bg-stone-500 text-white font-bold py-2 px-4 rounded`}>Previous</span> : <Link href={`/questions?page=${page-1}`} ><a className={`pagination-buttons previous bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>Previous</a></Link>}
            {data ? (data.rows?.map(({ slug, title, tags, id }, index) => {
              return (
                <>
                  <PostLayout key={index} slug={slug} questionId={id} tags={tags} title={title}></PostLayout>
              
              </>
              )
            })) : <Loading />}
            {data && (((page) * 10 - data.count) >= 0) ? <span className={`pagination-buttons next bg-stone-500 cursor-not-allowed  hover:bg-stone-500 text-white font-bold py-2 px-4 rounded`}>Next</span> : <Link href={`/questions?page=${page+1}`} ><a className={`pagination-buttons next bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>Next</a></Link>}
            </div>
           
      </Layout>
    )
}

export const getServerSideProps = async (ctx) => {
    let page = 1;
    if(ctx?.query?.page){
      page = Number(ctx.query.page);
    }
    const queryParms = new URLSearchParams('');
    queryParms.append('page', page)
    let data = {};
    try{
      data = await requester.getSync(`/questions?${queryParms.toString()}`);
    }catch(err){
      console.log(err);
    }
    
    return {
      props: {
       data: data,
       page: page
      },
      
    }



}

