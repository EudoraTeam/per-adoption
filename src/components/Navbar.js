import React,{useState}from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';



function Navbar() {
  
   const[click,setClick] = useState(false);
   const closeMobileMenu = () => setClick(false);
   
   
    return (
        <>
          <nav className = "navbar">
             <div className ="navbar-container">
        <Link to = '/' className="navbar-logo" onClick={closeMobileMenu}>
        <i>EUDORA </i>   <i className='fas fa-paw fa-spin fa-1.5x'/>
              </Link>
             <ul className={click ? 'nav-menu active': 'nav-menu'}>
          
                 <Link to = '/'className = 'nav-links' onClick={closeMobileMenu}>
                     Home
                 </Link>
               
                 <Link to = '/about' className = 'nav-links' onClick={closeMobileMenu}>
                    About
                 </Link>
               
               
                 <Link to = '/health-care' className = 'nav-links' onClick={closeMobileMenu}>
                   Health Care
                   </Link>
           

               
                
                   
                    
                   <button> 
                     <Link to = '/sign-in' className = 'nav-link' onClick={closeMobileMenu}>
                  Sign Up | Log In 
                   
                    </Link>
                       </button>
                      
                     
                         
                        
                 

                 </ul>

             </div>


            </nav>
        </>
    );
}

export default Navbar;
