import { Outlet } from "react-router-dom"
import NavbarComp from "./NavbarComp"

const Layout = () => {
  return (
    <main className="App space-y-4">
      <NavbarComp/>
        <Outlet />
        <div className="h-8"/>
    </main>
  )
}

export default Layout