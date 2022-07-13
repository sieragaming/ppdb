import Head from "next/head"
import Link from "next/link"
import { useState, useContext, useEffect } from "react"
import validate from "../utils/validate"
import { DataContext } from "../store/GlobalState"
import { postData } from "../utils/fetchData"
import MainLayout from "../components/MainLayout"
import { useRouter } from "next/router"

const Register = () => {
    const initialState = { username: '', email: '', password: '', cpassword: '' }
    const [userData, setUserData] = useState(initialState)
    const { username, email, password, cpassword } = userData

    const { state, dispatch } = useContext(DataContext)
    const { auth } = state

    const router = useRouter(0)

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
        dispatch({ type: 'NOTIFY', payload: {} })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const errMsg = validate(username, email, password, cpassword)
        if (errMsg) return dispatch({ type: 'NOTIFY', payload: { error: errMsg } })

        dispatch({ type: 'NOTIFY', payload: { loading: true } })

        const res = await postData('auth/register', userData)

        if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

        return (
            dispatch({ type: 'NOTIFY', payload: { success: res.msg } }),
            router.push('/login')
        )


    }

    useEffect(() => {
        if (Object.keys(auth).length !== 0) router.push('/login')
    }, [auth])


    return (
        <>
            <Head>
                <title>Registrasi Akun</title>
            </Head>
            <MainLayout>
                <section>
                    <div className="container">
                        <div className="row px-4 pt-2">
                            <div className="col col-md-6">
                                <img src="/image/logo1.png" height="auto" width="450px" />
                                <p className="h3 text-uppercase text-center fw-bolder mt-2 mb-2">YAYASAN SADDAm AL-ABROR</p>
                            </div>
                            <div className="col col-md-6">
                                <div className="card my-3">
                                    <div className="card-header fw-bold text-uppercase ">Registrasi Akun </div>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="mt-2 mb-3">
                                                <span className="text-capitalize fs-5 fw-semibold">
                                                    <i className="fa fa-user fa-fw me-3"></i>
                                                    Masukan Nama
                                                </span>
                                                <input type="text" className="form-control" id="username" name="username" value={username} onChange={handleChangeInput} />
                                            </div>
                                            <div className="mb-3">
                                                <span className="text-capitalize fs-5 fw-semibold">
                                                    <i className="fa fa-envelope fa-fw me-3"></i>
                                                    Masukan Email
                                                </span>
                                                <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleChangeInput} />
                                            </div>
                                            <div className="mb-3">
                                                <span className="text-capitalize fs-5 fw-semibold">
                                                    <i className="fa fa-lock fa-fw me-3"></i>
                                                    Masukan Password
                                                </span>
                                                <input type="password" className="form-control" id="password1" name="password" value={password} onChange={handleChangeInput} />
                                            </div>
                                            <div className="mb-3">
                                                <span className="text-capitalize fs-5 fw-semibold">
                                                    <i className="fa fa-key fa-fw me-3"></i>
                                                    Masukan Ulang Password
                                                </span>
                                                <input type="password" className="form-control" id="password2" name="cpassword" value={cpassword} onChange={handleChangeInput} />
                                            </div>
                                            <hr />
                                            <div className="mt-3 mb-3 d-flex justify-content-start align-middle">
                                                <button type="submit" className="btn btn-primary" > Daftar Sekarang</button>
                                                <span className="fs-6 ms-4">Anda Sudah Memiliki Akun ? Klik Disini <Link href="/login"><a className="text-danger cursor-pointer">Login</a></Link></span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </MainLayout>
        </>
    )
}
export default Register