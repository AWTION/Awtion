import LogInPage from './pages/LogInPage/LogInPage'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<LogInPage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
