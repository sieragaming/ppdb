import Head from "next/head"
import Link from "next/link"
import MainLayout from "../components/MainLayout"
import { useState, useContext, useEffect } from "react"
import { DataContext } from "../store/GlobalState"
import { postData } from "../utils/fetchData"
import Cookie from "js-cookie"
import { useRouter } from "next/router"


const Login = () => {
    const initialState = { email: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { email, password } = userData

    const { state, dispatch } = useContext(DataContext)
    const { auth } = state

    const router = useRouter()

    const handleChangeInput = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
        dispatch({ type: 'NOTIFY', payload: {} })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        dispatch({ type: 'NOTIFY', payload: { loading: true } })

        const res = await postData('auth/login', userData)

        if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

        dispatch({ type: 'NOTIFY', payload: { success: res.msg } })

        dispatch({
            type: 'AUTH', payload: {
                token: res.access_token,
                user: res.user
            }
        })

        Cookie.set('refreshToken', res.refresh_token, {
            path: 'api/auth/accessToken',
            expires: 7
        })
        localStorage.setItem('firstLogin', true)
        router.push('/dashboard')
    }
    useEffect(() => {
        if (Object.keys(auth).length !== 0) router.push('/dashboard')
    }, [auth])


    return (
        <>
            <Head>
                <title>Login Akun</title>
            </Head>
            <MainLayout>
                <section>
                    <div className="container">
                        <div className="row px-4 py-4">
                            <div className="col col-md-6">
                                <img src="/image/logo1.png" height="auto" width="450px" />
                                <p className="h3 text-uppercase text-center fw-bolder mt-2 mb-2">YAYASAN SADDAm AL-ABROR</p>
                            </div>
                            <div className="col col-md-6">
                                <div className="card my-3">
                                    <div className="card-header fw-bold text-uppercase ">Masuk Akun </div>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit}>
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
                                            <hr />
                                            <div className="mt-3 mb-3 d-flex justify-content-start align-middle">
                                                <button type="submit" className="btn btn-primary" > Masuk Sekarang</button>
                                                <span className="fs-6 ms-4">Anda Belum Memiliki Akun ? Klik Disini <Link href="/register"><a className="text-danger cursor-pointer">Register</a></Link></span>
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
export default Login