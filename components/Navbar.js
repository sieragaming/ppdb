import React, { useContext } from 'react'
import Link from 'next/link'
import { DataContext } from '../store/GlobalState'
import Cookie from 'js-cookie'

function Navbar() {
    const { state, dispatch } = useContext(DataContext)
    const { auth } = state

    const handleLogout = () => {
        Cookie.remove('refreshToken', { path: 'api/auth/accessToken' })
        localStorage.removeItem('firstLogin')
        dispatch({ type: 'AUTH', payload: {} })
        dispatch({ type: 'NOTIFY', payload: { success: 'Berhasil Keluar' } })
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-body  shadow p-3 mb-1 rounded">
            <div className="container-fluid px-4 py-2">
                <Link href="/">
                    <a className="navbar-brand text-uppercase align-middle " style={{ fontWeight: "bold", fontSize: "18pt" }}>
                        <img src="/image/logo1.png" alt="" width="50" height="50" className=" me-2" />
                        MTS Saddam Al-Abror
                    </a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link" style={{ fontWeight: "bold" }} aria-current="page" >Beranda</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{ fontWeight: "bold" }} href="#Alur">Alur Pendaftaran</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{ fontWeight: "bold" }} href="#TentangKami">Tentang Kami</a>
                        </li>
                        <div className="vr mx-2"></div>
                        {
                            Object.keys(auth).length === 0

                                ? <li className="nav-item">
                                    <div>
                                        <Link href="/register">
                                            <a className="btn btn-outline-success me-2 ms-2" style={{ paddingRight: "25px", paddingLeft: "25px", borderRadius: "20px" }}>Daftar</a>
                                        </Link>
                                        <Link href="/login">
                                            <a className="btn btn-success" style={{ paddingRight: "35px", paddingLeft: "35px", borderRadius: "20px" }}>Masuk</a>
                                        </Link>
                                    </div>
                                </li>
                                : <li className="nav-item">
                                    <button className="btn btn-success" style={{ paddingRight: "35px", paddingLeft: "35px", borderRadius: "20px" }} onClick={handleLogout}>Keluar</button>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar