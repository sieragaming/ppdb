import Head from 'next/head'
import React from 'react'
import NavsReg from './NavsReg'

function LayoutNavsReg({ children }) {
  return (
    <>
      <Head>
        <title>Formulir Pendaftaran</title>
      </Head>
      <section>
        <h4 className="mt-2">Formulir Pendaftaran Reguler</h4>
        <hr />
        <NavsReg />
        <hr />
        <main className="mt-2">
          {children}
        </main>
      </section>
    </>
  )
}

export default LayoutNavsReg