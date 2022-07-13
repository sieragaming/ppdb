import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function NavsAf() {
  const router = useRouter()

  const isActive = (rt) => {
    if (rt === router.pathname) {
      return "nav-link active"
    } else {
      return " "
    }
  }
  return (
    <>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item" >
          <Link href="/formAfirmasi">
            <a className={isActive("/formAfirmasi")}>Formulir</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/formAfirmasi/dataPribadi">
            <a className={isActive("/formAfirmasi/dataPribadi")} >Data Pribadi</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/formAfirmasi/dataOrtu">
            <a className={isActive("/formAfirmasi/dataOrtu")} >Data Orang Tua/Wali</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/formAfirmasi/dataSekolah">
            <a className={isActive("/formAfirmasi/dataSekolah")} >Data Sekolah Dasar</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/formAfirmasi/dataNilai">
            <a className={isActive("/formAfirmasi/dataNilai")} >Data Nilai Raport</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/formAfirmasi/dataBerkas">
            <a className={isActive("/formAfirmasi/dataBerkas")} >Data Berkas</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default NavsAf