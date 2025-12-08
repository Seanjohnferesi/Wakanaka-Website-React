import Home from './pages/Home'
import Explore from "./pages/Explore"
import {Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path = "/explore" element={<Explore />} />
    </Routes>
  )
}

export default App
