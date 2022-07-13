import React, { useContext, useEffect } from 'react'
import { useRouter } from "next/router"
import { DataContext } from '../store/GlobalState'
import Cookie from 'js-cookie'

function NavbarDashboard() {
  const { state, dispatch } = useContext(DataContext)
  const { auth } = state

  const router = useRouter()

  const handleLogout = () => {
    Cookie.remove('refreshToken', { path: 'api/auth/accessToken' })
    localStorage.removeItem('firstLogin')
    dispatch({ type: 'AUTH', payload: {} })
    dispatch({ type: 'NOTIFY', payload: { success: 'Berhasil Keluar' } })
    router.push('/')
    return
  }

  const adminRouter = () => {
    return (
      <>
        <Link href="/jenis">
          <a className="dropdown-item"><i className="fas fa-list mr-2"></i>Jenis Kelamin</a>
        </Link>
        <Link href="/agama">
          <a className="dropdown-item"><i className="fas fa-list mr-2"></i>Agama</a>
        </Link>
      </>
    )
  }

  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark bg-gradient">
      <a className="navbar-brand ps-3">SELAMAT DATANG</a>
      <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle"><i className="fas fa-bars"></i> </button>
      <ul className="navbar-nav ms-auto me-3">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fas fa-user fa-fw ms-2"></i>
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li>

            </li>
            <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default NavbarDashboard