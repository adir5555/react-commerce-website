import { Link } from 'react-router-dom';
import logos from '../../assets/logo.png';
import { FiAlignRight } from 'react-icons/fi';
import { FaRegCircleUser } from 'react-icons/fa6';
import { PiShoppingBagOpenLight } from 'react-icons/pi';
import './Navbar.css';



const Navbar = () => {

  const navlink = <>
    <li> <Link to='/'>Home</Link></li>
    <li> <Link to='/'>Menu</Link></li>
    <li><Link to='/'>Serect</Link></li>
    <li>
      <details>
        <summary>Read more </summary>
        <ul className="border-double border-4 border-indigo-100 rounded-t-none p-2">
          <li> <Link to='/'>Home</Link></li>
          <li> <Link to='/'>Menu</Link></li>
          <li> <Link to='/'>Serect</Link></li>
        </ul>
      </details>
    </li>
  </>
  return (
    <div className="navbar bg-base-100 border-2 border-b-indigo-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <FiAlignRight className='text-4xl'></FiAlignRight>
          </div>
          <ul
            tabIndex={0}
             className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow ">
            {navlink}
          </ul>
        </div>
        <img className='size-10 ml-20' src={logos} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-3xl menu-horizontal px-1">
          {navlink}
        </ul>
      </div>
      <div className="navbar-end mr-20">
        <input type="text" placeholder="Serch..." className="input input-ghost w-full max-w-xs mr-3" />
        <FaRegCircleUser className='text-4xl mr-3'></FaRegCircleUser>
        <PiShoppingBagOpenLight className='text-4xl'></PiShoppingBagOpenLight>
      </div>
    </div>
  );
};

export default Navbar;