import './App.css'
import { Global, css } from '@emotion/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/Homepage'

function App() {


  return (
    <>
      <Global styles={css`
      body {
       font-family: "Public Sans", sans-serif;}`} />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )


}

export default App
