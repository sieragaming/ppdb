import React from 'react'

function Footer() {
    return (
        <footer className="bg-dark text-center text-white">
            <div className="container-fluid  p-4 pb-0">
                <section className="mb-4">
                    <a className="btn btn-outline-light m-1"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-light m-1"><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-outline-light m-1"><i className="fab fa-whatsapp"></i></a>
                </section>
            </div>

            <div className=" text text-center p-3 text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2022 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">by Ahmad Irsadi</a>
            </div>

        </footer>
    )
}

export default Footer