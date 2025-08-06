import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import './App.css'
import Titulo from './Titulo.jsx'
import Rodape from "./Rodape.jsx"
import Menu from './Menu.jsx'

function App() {


  return (
    <>
      <div className='container'>
        <Titulo />
        <Menu />
      </div>
      <Rodape />
    </>
  )
}

export default App
