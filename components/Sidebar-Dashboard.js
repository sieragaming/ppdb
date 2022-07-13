import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { DataContext } from '../store/GlobalState'
import Cookie from 'js-cookie'

function SidebarDashboard() {
  const { state, dispatch } = useContext(DataContext)
  const { auth } = state

  const router = useRouter()

  const isActive = (rt) => {
    if (rt === router.pathname) {
      return "active"
    } else {
      return " "
    }
  }

  const handleLogout = () => {
    Cookie.remove('refreshToken', { path: 'api/auth/accessToken' })
    localStorage.removeItem('firstLogin')
    dispatch({ type: 'AUTH', payload: {} })
    dispatch({ type: 'NOTIFY', payload: { success: 'Berhasil Keluar' } })
    router.push('/')
    return
  }

  return (
    <div id="layoutSidenav_nav" style={{ zIndex: 10 }}>
      <nav className="sb-sidenav accordion sb-sidenav-dark sb-sidenav-gradient" id="sidenavAccordion">
        <div className="sb-sidenav-menu">
          <div className="nav mt-4">
            <Link href="/dashboard">
              <a className="nav-link">
                <div className="sb-nav-link-icon"><i className=" fas fa-home"></i></div>
                Beranda
              </a>
            </Link>
            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
              <div className="sb-nav-link-icon"><i className="fas fa-file-circle-plus"></i></div>
              Form Pendaftaran
              <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
            </a>
            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
              <nav className="sb-sidenav-menu-nested nav">
                <Link href="/formReguler">
                  <a className="nav-link"><div className="sb-nav-link-icon"><i className=" fas fa-user-pen"></i></div>Jalur Reguler</a>
                </Link>
                <Link href="/formAfirmasi">
                  <a className="nav-link"><div className="sb-nav-link-icon"><i className=" fas fa-user-plus"></i></div>Jalur Afirmasi</a>
                </Link>
              </nav>
            </div>
            <a className="nav-link" onClick={handleLogout}>
              <div className="sb-nav-link-icon"><i className="fas fa-gears"></i></div>
              Keluar
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default SidebarDashboard