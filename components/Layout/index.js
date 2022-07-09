import Header from "./Header";

import React from 'react'
import styled from "styled-components";
import Head from "next/head";
const LayoutStyled = styled.div`

`
export default function Layout({children}) {
  return (
    <LayoutStyled>
        <Head>

        </Head>

        <Header/>

        <div className='main-content'>
            {
                children
            }
        </div>
    </LayoutStyled>    
  )
}
