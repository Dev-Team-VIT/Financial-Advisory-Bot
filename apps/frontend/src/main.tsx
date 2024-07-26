import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AlertProvider } from './context/alertContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <AlertProvider>
    <App />
  </AlertProvider>,
)
