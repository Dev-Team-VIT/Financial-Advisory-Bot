import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import UserHandling from './pages/loginLogout'
import Advisory from './pages/advisory'
import { Logout } from './pages/logout'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/home' element={<Landing/>}></Route>
      <Route path='/login' element={<UserHandling type = "login"/>} />
      <Route path='/signup' element={<UserHandling type = "signup"/>} />
      <Route path='/advisory' element={<Advisory/>}/>
      <Route path='/logout' element={<Logout/>}/>

    </Routes>
    </BrowserRouter>
     </>
  )
}

export default App
