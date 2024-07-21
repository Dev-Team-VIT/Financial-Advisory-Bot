import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import UserHandling from './pages/loginLogout'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/login' element={<UserHandling type = "login"/>} />
      <Route path='/signup' element={<UserHandling type = "signup"/>} />


    </Routes>
    </BrowserRouter>
     </>
  )
}

export default App
