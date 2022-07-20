import React from 'react'
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ( { children } ) => {
  return (
    <div className='layout'>
      <Head>
        <title>HEPACO</title>
        <meta property="og:description" content="Оградни пана, портали, оградна мрежа, контейнери за живеене, термопанели, пелети за огрев и други.
          Доставяме в цяла България и Европа.
          КОНКУРЕНТНИ ЦЕНИ!
          Hepaco-bg
          ">
        </meta>
        <meta property="og:description" content="КОНТЕЙНЕРИ, ОГРАДИ, ТЕРМOПАНЕЛИ, СТРОИТЕЛНИ, МАТЕРИАЛИ, ОТОПЛЕНИЕ, АКСЕСОАРИ"></meta>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout