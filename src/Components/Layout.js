import Header from './Header';
import Footer from './Footer';
import Head from 'next/head'
import {Fragment} from 'react'

const Layout = (props) => {
  return (
    <main>
      <Head>
        <title>{props.pageName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Fragment>
      {props.children}

      </Fragment>
      <Footer/>
    </main>
  )
}

export default Layout
