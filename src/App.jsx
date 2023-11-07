import LogInPage from './pages/LogInPage/LogInPage'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from './pages/SignUpPage/SignUpPage';

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/signUp" element={<SignUpPage/>}/> 

      </Routes>

    </BrowserRouter>
  )
}

export default App
