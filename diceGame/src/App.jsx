import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './component/Page/Page1/LandingPage'
import SecondPage from './component/Page/Page2/SecondPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/secondPage' element={<SecondPage />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
