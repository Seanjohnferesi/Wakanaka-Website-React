import Home from './pages/Home'
import Explore from "./pages/Explore"
import Gallery from "./pages/Gallery"
import PageWrapper from './components/PageWrapper';
import {Routes, Route, useLocation } from "react-router-dom"
import {AnimatePresence} from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path = "/explore" element={<PageWrapper><Explore /></PageWrapper>} />
        <Route path = "/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
