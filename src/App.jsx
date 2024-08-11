import Navbar from './componentes/Navbar'
import Home from './componentes/Home'
import RegisterPage from './componentes/RegisterPage'
import LoginPage from './componentes/LoginPage'
import Footer from './componentes/Footer'
import './App.css'

function App() {

  return (
    <>
      <Navbar/>

      {/* <Home/> */}
      {/* <RegisterPage/> */}
      <LoginPage/>

      <Home/>

      <Footer/>
    </>
  )
}

export default App
