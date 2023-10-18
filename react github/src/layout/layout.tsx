
import { Outlet, Link } from "react-router-dom";
import React from "react";
import { useNavigate } from 'react-router-dom'





const Layout=()=>{
    const navigate = useNavigate();

    const handleBack = () => {
  
      navigate('/')
  
    }

    const toForm = () =>{
        navigate('/contact')
    }

    return(

<>

<div>
<div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
      </div>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo">
            <a href="#">
              <span>BBK</span>
              <span>.com</span>
            </a>
          </div>
          <ul className="menu">
            <li>
              <a onClick={handleBack} className="menuBtn" style={{cursor: 'pointer'}} >
                <strong>Home</strong>
              </a>
            </li>
            <li>
              <a onClick={handleBack} href="#about" className="menuBtn">
                <strong>About</strong>
              </a>
            </li>
            <li>
              <a onClick={handleBack} href="#services" className="menuBtn">
                <strong>Services</strong>
              </a>
            </li>
            <li>
              <a onClick={handleBack} href="#skills" className="menuBtn">
                <strong>Skills</strong>
              </a>
            </li>
            <li>
              <a onClick={handleBack} href="#projects" className="menuBtn">
                <strong>Projects</strong>
              </a>
            </li>
            <li>
              <a onClick={handleBack} href="#contact" className="menuBtn">
                <strong>Contact</strong>
              </a>
            </li>
            <li>
              <a onClick={toForm} className="menuBtn" style={{cursor: 'pointer'}}>
                <strong>ContactMe</strong>
              </a>
            </li>
          </ul>
         
        </div>
       
      </nav>
      </div>
<Outlet/>
</>



    );
};


export default Layout