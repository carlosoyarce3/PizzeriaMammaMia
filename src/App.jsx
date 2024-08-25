import "./componentes/Componentes.css"
import './App.css'
import Navbar from './componentes/Navbar'
//import Home from './componentes/Home'
//import RegisterPage from './componentes/RegisterPage'
//import LoginPage from './componentes/LoginPage'
import Footer from './componentes/Footer'
//import Cart from './componentes/Cart'
import Pizza from "./componentes/Pizza"



function App() {

  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      {/* <RegisterPage/> */}
      {/* <LoginPage/> */}
      {/* <Cart/> */}
      <Pizza/>
      <Footer/>
    </>
  )
}

export default App
