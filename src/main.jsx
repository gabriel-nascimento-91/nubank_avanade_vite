import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import createGlobalStyle from './assets/styles/global'
import App from './layout/App'
import Extrato from './layout/Extract'
import Login from './layout/Login'
import Register from './layout/Register'

const GlobalStyle = createGlobalStyle;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/extrato" element={<Extrato />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);