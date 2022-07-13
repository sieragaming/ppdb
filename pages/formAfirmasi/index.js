import React, { useContext } from 'react'
import LayoutDashboard from '../../components/Layout-Dashboard'
import LayoutNavsAf from '../../components/Layout-NavsAf'
import { useRouter } from 'next/router'
import { DataContext } from '../../store/GlobalState'

const Form = () => {
  const router = useRouter()
  const { state, dispatch } = useContext(DataContext)
  const { auth } = state

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: 'NOTIFY', payload: { success: "Berhasil" } })
    router.push("/formAfirmasi/dataPribadi")
  }
  return (
    <>
      <LayoutDashboard>
        <LayoutNavsAf>
          <div className="card py-5">
            <div className="card-body">
              <h3 className="text-center card-text"> Selamat Datang Pada Menu Pendaftaran Peserta Didik Baru Yayasan Saddam AL-Abror Karang Bendo</h3>
              <h5 className="mt-3 text-center card-text"> Klik Lanjut Untuk Melanjutkan Pada Halaman Berikutnya</h5>
              <div className="mt-5 d-grid gap-2 col-6 mx-auto">
                <button type="button" className="align-center btn btn-lg btn-primary" onClick={handleSubmit}>Lanjutkan</button>
              </div>
            </div>
          </div>
        </LayoutNavsAf>
      </LayoutDashboard>
    </>
  )
}

export default Form