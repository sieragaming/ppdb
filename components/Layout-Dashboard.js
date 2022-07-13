import React from 'react'
import NavbarDashboard from './Navbar-Dashboard'
import Notify from './Notify'
import SidebarDashboard from './Sidebar-Dashboard'

function LayoutDashboard({ children }) {
  return (
    <div className='sb-nav-fixed'>
      <NavbarDashboard />
      <Notify />
      <div id="layoutSidenav">
        <SidebarDashboard />
        <div id="layoutSidenav_content">
          <main className="mx-3 my-2">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}

export default LayoutDashboard