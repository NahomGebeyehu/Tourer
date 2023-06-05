import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import Services from './Routes/Services';
import Contact from './Routes/ContactUs';
import Navbar from "./Components/Navbar";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>


    </>
  );
}

export default App;
