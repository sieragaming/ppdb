import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function NavsReg() {
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
          <Link href="/formReguler">
            <a className={isActive("/formReguler")}>Formulir</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/formReguler/dataPribadi">
            <a className={isActive("/formReguler/dataPribadi")} >Data Pribadi</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/formReguler/dataOrtu">
            <a className={isActive("/formReguler/dataOrtu")} >Data Orang Tua/Wali</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/formReguler/dataSekolah">
            <a className={isActive("/formReguler/dataSekolah")} >Data Asal Sekolah</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/formReguler/dataNilai">
            <a className={isActive("/formReguler/dataNilai")} >Data Nilai Raport</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/formReguler/dataBerkas">
            <a className={isActive("/formReguler/dataBerkas")} >Data Berkas</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default NavsReg