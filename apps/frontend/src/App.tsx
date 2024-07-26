import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import UserHandling from './pages/loginLogout';
import Advisory from './pages/advisory';
import { Logout } from './pages/logout';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from './components/ui/alert';
import { useAlert } from "./context/alertContext"

function App() {
  const { alertType } = useAlert();

  return (
    <>
      {alertType === 'failure' && (
        <div className='alert-failure fixed z-10 inset-x-[10vw] md:inset-x-[30vw] inset-y-[10vh]'>
          <Alert variant="default" className='border-[red] text-[red] bg-[#F8B2B2]'>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
        </div>
      )}
      {alertType === 'success' && (
        <div className='alert-success fixed z-10 inset-x-[10vw] md:inset-x-[30vw] inset-y-[10vh]'>
          <Alert variant="default" className='border-[green] text-[green] bg-[#A9F989]'>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
        </div>
      )}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Landing />}></Route>
          <Route path='/login' element={<UserHandling type="login" />} />
          <Route path='/signup' element={<UserHandling type="signup" />} />
          <Route path='/advisory' element={<Advisory />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
