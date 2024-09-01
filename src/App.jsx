import {Routes, Route} from "react-router-dom"
import "./componentes/Componentes.css"
import './App.css'
import Navbar from './componentes/Navbar'
import Home from './pages/Home'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Footer from './componentes/Footer'
import Cart from './pages/Cart'
import Pizza from "./pages/Pizza"
import NotFound from "./pages/NotFound"
import Profile from "./pages/Profile"


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/pizza/p001" element={<Pizza/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
