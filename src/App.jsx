import { Navbar } from './Components/Navbar'
import { Intro } from './Components/Intro'
import { Routes, Route } from 'react-router-dom'
import { Allroutes } from './Routes/Allroutes'
import { Signin } from './Components/SignIn'
import { Login } from './Components/Login'
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Allroutes />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
