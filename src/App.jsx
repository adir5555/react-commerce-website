import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Page/Home';

import Collection from './Page/Collection';
import Contact from './Page/Contact';
import Logout from './Page/Logout';
import Login from './Page/Login';
import Order from './Page/Order';
import About from './Page/About';
import Footer from './Compontnes/Footer';
import Navbar from './Compontnes/Navbar';
import Navbars from './Compontnes/Navbars';


const App = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* <Navbars></Navbars> */}
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Logout' element={<Logout />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Order' element={<Order />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;