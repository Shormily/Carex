import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from './Component/Home/Navbar/Navbars';
// import {
//   Routes,
//   Route,
//   BrowserRouter
// } from "react-router-dom";
import Home from "./Component/Home/Home"
import About from './Component/Home/About/About';
import Service from './Component/Home/Service/Service';
import Contact from './Component/Home/Contact/Contact';
import Footer from './Component/Home/Footer/Footer';
import Navbars from "./Component/Home/Navbar/Navbars";
import Login from './Component/Login/Login';

function App() {
  return (
    <>   
  
<BrowserRouter>
<Navbars/>
<Routes>
<Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/service" element={<Service />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/login" element={<Login />}/>
</Routes>
<Footer/> 
</BrowserRouter>
     {/* <BrowserRouter>
     <Navbar/>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/service" element={<Service />}/>
      <Route path="/contact" element={<Contact />}/>
      </Routes> 
      <Footer/>   
     </BrowserRouter> */}
      
    </>
  );
}

export default App;
