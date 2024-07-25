import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import About from './pages/about/About';
import Contact from "./pages/contact/Contact";
import Footer from './components/Footer';
import Process from './pages/process/Process';
import Expertise from './pages/expertise/Expertise';
// import { FaServicestack } from 'react-icons/fa';
import Services from './pages/services/Services';
import Projects from './pages/projects/Projects';
import Blogs from './pages/blogs/Blogs';
import ScrollToTop from './components/ScollToTop';
import SingleBlog from './pages/blogs/SingleBlog';
import Crypto from './pages/blogs/Crypto';
import Binance from './pages/blogs/Binance';
import Chain from './pages/blogs/Chain';
import Stock from './pages/blogs/Stock';
import Trust from './pages/blogs/Trust';



const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/process" element={<Process />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* <Route path="/blogs/:name" element={<SingleBlog />} /> */}
        <Route path="/blogs/blockchain" element={<SingleBlog />} />
        <Route path="/blogs/crypto" element={<Crypto />} />
        <Route path="/blogs/binance" element={<Binance />} />
        <Route path="/blogs/chain" element={<Chain />} />
        <Route path="/blogs/stock" element={<Stock />} />
        <Route path="/blogs/trust" element={<Trust />} />
        <Route path="/projects" element={< Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;