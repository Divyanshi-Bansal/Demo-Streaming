import React,{useState , setState} from 'react';
import ReactDom from 'react-dom';
import '../styles/navbar.css';
import { ReactComponent as CloseMenu } from "../styles/x.svg";
import { ReactComponent as MenuIcon } from "../styles/menu.svg";



function Navbar(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    return (
      <div className="navbar">
        <div className="logo-nav">
          <div className="logo-container">
            <h2>
              DEMO Streaming
              </h2>
          </div>
  
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option" onClick={closeMobileMenu}>
              <a href="#">Log in</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="#">Start free trial</a>
            </li>
          </ul>
        </div>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
    );
  };

export default Navbar;