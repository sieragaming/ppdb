import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../components/MainLayout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Beranda</title>
      </Head>
      <MainLayout>
        <section>
          <div className="text-center" style={{ backgroundImage: "url('../image/yayasan.jpg')", backgroundSize: "cover", height: "500px" }}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h2 className="mb-3 text-uppercase">PORTAL PENDAFTARAN</h2>
                <h1 className="mb-3 text-uppercase">PESERTA DIDIK BARU</h1>
                <h4 className="mb-3 text-uppercase">Yayasan Saddam AL-Abror</h4>
                <Link href="/register">
                  <a className="btn btn-primary btn-lg text-uppercase" role="button">Daftar Sekarang</a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id='Alur'>
          <div className="container-fluid px-4">
            <div className="card my-4">
              <div className="card-header">
                <h3 className="text-center text-uppercase text-underline" style={{ fontWeight: "bold" }} ><u>Alur Pendaftaran</u></h3>
              </div>
              <div className="card-body">
                <div className="row d-flex justify-content-center">
                  <div className="col col-md-6">
                    <div className="card m-2" style={{ height: "55rem" }}>
                      <div className="card-header bg-primary text-white border border-primary">
                        <h4 className="text-center text-uppercase text-underline text-middle" style={{ fontWeight: "bold" }} >Jalur Reguler</h4>
                      </div>
                      <div className="card-body">
                        <p className="text-justify text-capitalize">Jalur ini ditujukan untuk warga masyarakat luas yang mana dari kalangan apapun dapat mendaftar ke yayasan ini</p>
                        <hr />
                        <h6 className="mx-3">Ada Beberapa Tata Cara Untuk Mendaftar Pada Jalur Ini :</h6>
                        <ul className="text-capitalize" style={{ listStyle: "none" }}>
                          <li>1. Pendaftaran Dilakukan Pada Link Berikut Ini <a href='#'>ppdb.yayasan.com</a></li>
                          <li>2. Siapkan Dokumen Yang Di Perlukan Antara Lain :
                            <ul>
                              <li>Siapkan Foto Ukuran 4X6 Berlatar Belakang Merah</li>
                              <li>NISN (Nomor Induk Siswa Nasional)</li>
                              <li>KK (Kartu Keluarga)</li>
                              <li>Akta Kelahiran</li>
                              <li>Siapkan Uang Pembayaran Daftar Ulang Sebesar Rp.30.000,-</li>
                              <li>NB : Dokumen Tersebut Berupa Hasil Scanner Berupa Gambar</li>
                            </ul>
                          </li>
                          <li>3. Klik Tombol <strong>Register</strong> Yang Terdapat Pada Pojok Kiri Atas</li>
                          <li>4. Klik Tombol <strong>Login</strong> Yang Terdapat Pada Pojok Kiri Atas</li>
                          <li>5. Setelah Login Calon Siswa Akan Di Arahkan Ke Halaman Dashboard</li>
                          <li>6. Klik Tombol Formulir Pendaftaran</li>
                          <li>7. Isi Data Mulai Dari Tambahkan Foto, Data Pribadi, Data Orang Tua, Data Sekolah Asal, Data Prestasi Dan Hasil Rata-Rata Nilai Raport Kelas 4 Semester 1 & 2, Kelas 5 Semester 1 & 2 Dan Kelas 6 Semester 1 </li>
                          <li>8. Klik Submit </li>
                          <li>9. Tunggu Informasi Lebih Lanjut Akan Dihubungi Via Whatsapp </li>
                          <li>10. Pembayaran Di Lakukan Jika Putra/Putri Bapak/Ibu Lolos Seleksi Tahap 1 </li>
                          <li>11. Pembayaran Di Lakukan saat Bapak/Ibu Melakukan Proses Interview Yang Dilakukan Di Yayasan Dan Pembayaran Dilakukan Pada Loket Yang Tersedia, Untuk Cara Pembayaran <a href="#Pembayaran"><u>Klik Disini</u></a></li>
                          <li>12. Peserta Akan Dinyatakan Lolos Sebagai Murid Jika Sudah Melakukan Alur Sesuai Dengan Prosedur Diatas  </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="card m-2" style={{ height: "55rem" }}>
                      <div className="card-header bg-info text-white border border-info">
                        <h4 className="text-center text-uppercase text-underline text-middle" style={{ fontWeight: "bold" }} >Jalur Afirmasi</h4>
                      </div>
                      <div className="card-body">
                        <p className="text-justify text-capitalize">Jalur ini ditujukan untuk calon siswa yang mana salah satu orang tuanya meninggal dunia (yatim/piatu) atau kedua orang tuanya meninggal (yatim piatu)</p>
                        <hr />
                        <h6 className="mx-3">Ada Beberapa Tata Cara Untuk Mendaftar Pada Jalur Ini :</h6>
                        <ul className="text-capitalize" style={{ listStyle: "none" }}>
                          <li>1. Pendaftaran Dilakukan Pada Link Berikut Ini <a href='#'>ppdb.yayasan.com</a></li>
                          <li>2. Siapkan Dokumen Yang Di Perlukan Antara Lain :
                            <ul>
                              <li>Siapkan Foto Ukuran 4X6 Berlatar Belakang Merah</li>
                              <li>NISN (Nomor Induk Siswa Nasional)</li>
                              <li>KK (Kartu Keluarga)</li>
                              <li>Akta Kelahiran</li>
                              <li>Surat Keterangan Orang Tua Yang Meninggal </li>
                              <li>Biaya Pendaftaran Gratis </li>
                              <li>NB : Dokumen Tersebut Berupa Hasil Scanner Berupa Gambar</li>
                            </ul>
                          </li>
                          <li>3. Klik Tombol <strong>Register</strong> Yang Terdapat Pada Pojok Kiri Atas</li>
                          <li>4. Klik Tombol <strong>Login</strong> Yang Terdapat Pada Pojok Kiri Atas</li>
                          <li>5. Setelah Login Calon Siswa Akan Di Arahkan Ke Halaman Dashboard</li>
                          <li>6. Klik Tombol Formulir Pendaftaran</li>
                          <li>7. Isi Data Mulai Dari Tambahkan Foto, Data Pribadi, Data Orang Tua, Data Sekolah Asal, Data Prestasi, Data Surat Keterangan Orang Tua Yang Meninggal Dan Hasil Rata-Rata Nilai Raport Per-Semester </li>
                          <li>8. Klik Submit </li>
                          <li>9. Tunggu Informasi Lebih Lanjut Akan Dihubungi Via Whatsapp </li>
                          <li>10. Jika Calon Peserta Lolos, Peserta Akan Di Datangi Oleh Pihak Panitia Untuk Mengecek Data Yang Di Daftarkan Benar Dan Dinyatakan Masuk Secara Langsung Oleh Panitia </li>
                          <li>11. Peserta Akan Dinyatakan Lolos Sebagai Murid Jika Sudah Melakukan Alur Sesuai Dengan Prosedur Diatas  </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="Pembayaran">
          <div className="container-fluid px-4">
            <div className="card my-4">
              <div className="card-header">
                <h3 className="text-center text-uppercase text-underline py-3" style={{ fontWeight: "bold" }}><u>Alur Pembayaran Bagi Jalur Reguler</u></h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col col-md-6">
                    <div className="px-2 py-2">
                      <img src="/image/pembayaran.png" height="auto" width="600px" />
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="px-2 py-2">
                      <ul>
                        <li className="card px-2 py-2 mb-3">Pastikan Calon Siswa/Siswi Sudah Lolos Tahap 1 Dan Mendapat No Pembayaran Yang Didapat Melalui Pemberitahuan Whatsapp </li>
                        <li className="card px-2 py-2 mb-3">Jika Sudah Dipastikan Lolos Orangtua/Wali Wajib Datang Kesekolah Beserta Siswa/Siswi Untuk Daftar Ulang </li>
                        <li className="card px-2 py-2 mb-3">Silahkan Datang Dan Menuju Ke Loket Pembayaran Yang Telah Disediakan Dan Tunjukan Kode Pembayarannya</li>
                        <li className="card px-2 py-2 mb-3">Setelah Pembayaran Orang Tua Dan Peserta Akan Langsung Di Wawancarai Secara Langsung Oleh Pihak Sekolah Tersebut </li>
                        <li className="card px-2 py-2 mb-3">Selesai</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="TentangKami">
          <div className="container-fluid px-4">
            <div className="card my-4">
              <div className="card-header">
                <h3 className="text-center text-uppercase text-underline py-3" style={{ fontWeight: "bold" }}><u>Tentang Kami</u></h3>
              </div>
              <div className="card-body px-2 py-2">
                <div className="row flex-md-row-reverse align-items-center mx-2 my-2">
                  <div className="col col-md-6">
                    <img src="/image/logo1.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500px" height="auto" loading="lazy" />
                  </div>
                  <div className="col col-md-6">
                    <h1 className="display-6 fw-bold mb-3">Yayasan Saddam Al-Abror</h1>
                    <p className="lead text-capitalize" align="justify">Yayasan Saddam Al -  Abror Karangbendo merupakan sebuah Sekolah madrasah yang sedang berkembang, sarana dan prasaran yang dimiliki sudah cukup memadai untuk mendukung perkembangan teknologi dengan adanya fasilitas lab TIK dan juga adanya jaringan Wi-Fi yang telah disediakan oleh pihak yayasan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </div >
  )
}
