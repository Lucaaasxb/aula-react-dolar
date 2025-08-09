import {Outlet, Link} from 'react-router-dom'
import Titulo from '../Titulo.jsx'
import Rodape from "../Rodape.jsx"
import Menu from '../Menu.jsx'
import Banner from "../banner.jsx"



function Layout() {


  return (
    <>
      <div className='container'>
        <Titulo />
        <Menu />
        <Banner />
        <Outlet />
      </div>
      <Rodape />
    </>
  )
}

export default Layout
