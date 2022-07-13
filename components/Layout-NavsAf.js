import Head from 'next/head'
import React from 'react'
import NavsAf from './NavsAf'

function LayoutNavsAf({ children }) {
  return (
    <>
      <Head>
        <title>Formulir Pendaftaran</title>
      </Head>
      <section>
        <h4 className="mt-2">Formulir Pendaftaran Afirmasi</h4>
        <hr />
        <NavsAf />
        <hr />
        <main className="mt-2">
          {children}
        </main>
      </section>
    </>
  )
}

export default LayoutNavsAf