import React,{useState}from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
   const[click,setClick] = useState(false);
const[button,setButton] = useState(true);
  
  const closeMobileMenu = () => setClick(false);
  const showButton = () =>{
      if(window.innerWidth<=960){
          setButton(false);
      }else{
        setButton(true);
      }
  };
  window.addEventListener('resize',showButton);
    return (
        <>
          <nav className = "navbar">
             <div className ="navbar-container">
        <Link to = '/' className="navbar-logo" onClick={closeMobileMenu}>
        <i>EUDORA </i>   <i className='fas fa-paw fa-spin fa-1.5x'/>
              </Link>
             <ul className={click ? 'nav-menu active': 'nav-menu'}>
             <li className ='nav-item'>
                 <Link to = '/'className = 'nav-links' onClick={closeMobileMenu}>
                     Home
                 </Link>
                 </li>
                 <li className ='nav-item'>
                 <Link to = '/about' className = 'nav-links' onClick={closeMobileMenu}>
                    About
                 </Link>
                </li>
                 <li className ='nav-item'>
                 <Link to = '/health-care' className = 'nav-links' onClick={closeMobileMenu}>
                   Health Care
                   </Link>
               </li>  
               <li className ='nav-item'>
                 <Link to = '/log-in' className = 'nav-links-mobile' onClick={closeMobileMenu}>
                   Log In
                 </Link>
              </li>
                 <li className ='nav-item'>
                 <Link to = '/sign-up' className = 'nav-links-mobile' onClick={closeMobileMenu}>
                     Sign Up
                 </Link>
                 </li>
                 </ul>
             
             
             {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
             {button && <Button buttonStyle =' btn--outline'>Log In</Button>}

                 
             </div>

            
            </nav>
        </>
    );
}

export default Navbar;
