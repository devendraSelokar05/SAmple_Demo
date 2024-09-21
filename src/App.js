import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Home from "./components/Home";



function App() {
  return (
   <>
       <BrowserRouter>
       <Navbar/>
      <Routes>
          <Route path="home" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
   
     </>
  )
}

export default App;
