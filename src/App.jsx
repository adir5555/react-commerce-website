import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Page/Home';
import Cart from './Page/Cart';
import About from './Page/About';
import Prodect from './Page/Prodect';
import Order from './Page/Order';
import Login from './Page/Login';
import Logout from './Page/Logout';
import Navbar from './Compontnes/Navbar/Navbar';


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={Cart}/>
      <Route path='/About' element={About}/>
      <Route path='/Prodect' element={Prodect}/>
      <Route path='/Order' element={Order}/>
      <Route path='/Login' element={Login}/>
      <Route path='/Logout' element={Logout}/>
    </Routes>
    </div>
  );
};

export default App;