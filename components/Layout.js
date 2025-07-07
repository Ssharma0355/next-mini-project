import React, { Children } from 'react'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

const Layout = ({children, title}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossOrigin="anonymous" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout
