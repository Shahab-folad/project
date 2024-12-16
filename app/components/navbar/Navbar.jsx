"use client"

import React, { useEffect, useState } from 'react';
import './navbar.css';
import Link from 'next/link';

function Navbar() {
    const [dropProduct, setdropProdcut] = useState("none");
    const [dropServices, setdropServices] = useState("none");
    const [menuActive, setmenuActive] = useState("");
    // const [show, setShow] = useState(false);

    // const toggleShow = () =>{{
    //   setShow(prevShow =>(!prevShow));
    // }}

     // Function to hide content when clicking outside
  // const handleOutsideClick = () => {
  //     setShow(false);
  // };

  //  useEffect(() => {
    
  //   if(show==false){
  //     document.addEventListener("click", handleOutsideClick);
  //   return () => {
      // Cleanup event listener on component unmount
      // document.removeEventListener("click", handleOutsideClick);
  //   }
    
  //   };
  // }, []);


    // ***************************************************************************
   const toggleMenuActive = () => {
        setmenuActive(prevActive =>(!prevActive));
    };

    const productToggle = () => {
        setdropProdcut(prevProduct =>(prevProduct==="none" ? "block" : "none"));
    };
    const servicesToggle = () => {
      setdropServices(prevServices =>(prevServices==="none" ? "block" : "none"));
  };

//   useEffect(() => {
//     document.addEventListener("DOMContentLoaded", function () {
//     const dropdownToggles = document.querySelectorAll(".nav-link.dropdown-toggle");

//     dropdownToggles.forEach(toggle => {
//         toggle.addEventListener("click", function (event) {
//             event.preventDefault(); // Prevent default action for anchor tag
//             const menu = toggle.nextElementSibling;
//             menu.style.display = menu.style.display === "none" ? "block" : "none";
//         });
//     });

//     document.addEventListener("click", function (event) {
//         dropdownToggles.forEach(toggle => {
//             const menu = toggle.nextElementSibling;
//             if (!toggle.contains(event.target) && !menu.contains(event.target)) {
//                 menu.style.display = "none";
//             }
//         });
//     });
// });
    
//   },[]);
  return (
    <>
      <div className="desktop-navbar">
        <header>
          <div className="top-nav">
            <ul className="nav-links">
              <li>
            <Link href={'/about'} >About us</Link>
                
                {/* <a href="/about">About us</a> */}
                </li>

              <a href="#" className="search-icon m-1"><img src="search.svg" alt="" /></a>

              <select name="language" id="language" style={{ fontFamily: "Cinzel, serif" }}>
                  <option value="english">English</option>
                  <option value="french">French</option>
                </select>
            </ul>
            <div className="extra-options">
              
              <div className="language-dropdown">
                
              </div>
            </div>
          </div>
        </header>
        <div className="navbar-container">
          <div className="navbar-logo d-logo">
          <Link href={'/'}>
            <img src="logo.png" alt="zenitheclipse Logo" width="80px" />
            </Link>
          </div>
{/************************************************************************************/}
{/****************************Desktop List items**************************************/}
          <ul className="navbar-links">
          
            <li><Link href={'/'}>Home</Link></li>
            {/* onMouseOver={()=>{setShow(true)}} */}
          <li><Link href={'/products'}>Products</Link></li>
            <li><Link href={'/services'}>Services</Link></li>
            
            <li><Link href={'/ContactUs'}>Contact Us</Link></li>
            <li>
              <a href="#" className="nav-bar-flex">
                <div className="person-icon">
                  <i className="fa fa-user-circle-o" aria-hidden="true"></i>&nbsp;My Account
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
{/********************************* Mobile Navbar *********************************/}
      <div className="mobile-navbar">
        <header>
          <div className="top-nav">
            <div className="navbar-container">
              <div className="navbar-logo">
              <Link href={'/'}>
                <img src="./logo.png" alt="zenitheclipse logo" className='mobile-nav-logo' width="35px" />
                </Link>
              </div>
              <div className="extra-options">
                <a href="#" className="search-icon m-search"><img src="search.svg" alt="Search" /></a>
                <div className="menu-icon" onClick={toggleMenuActive}>
                  <img src="tab.PNG" alt="Menu" />
                </div>
              </div>
            </div>
          </div>

          <div className={`mobile-menu ${menuActive ?'active': null}`} >
            <div className="mobile-menu-header">
              <select name="language" id="language">
                <option value="english">English</option>
                <option value="french">French</option>
              </select>
              <button className="close-icon" onClick={toggleMenuActive}>×</button>
            </div>
            <ul className="mobile-menu-links" >
              <li className="nav-item dropdownLi" onClick={toggleMenuActive}>
              <Link className="nav-link dropdown-toggle" href={'/'}>Home</Link>
                {/* <a className="nav-link dropdown-toggle" href="#" id="shipping-menu" role="button">Home</a> */}
                
              </li>
              <li className="nav-item dropdownLi" onClick={toggleMenuActive}>
              <Link className="nav-link dropdown-toggle" href={'/about'}>About Us</Link>
                {/* <a className="nav-link dropdown-toggle" href="#" id="news-menu" role="button">About Us</a> */}
              </li>
   {/******************************* Product *******************************/}
              <li className="nav-item dropdown" onClick={toggleMenuActive}>
              <Link className="nav-link dropdown-toggle" href={'/products'}>Products</Link>

              {/* <a class="nav-link dropdown-toggle" onClick={productToggle} href="#" id="solutions-menu" role="button">
                  Products
              </a> */}
              <div className="solutionsMenu dropdown-menu" style={{display:dropProduct}} aria-labelledby="solutions-menu">
                  <div className="content">
                      <div className="wrapper">
                          <div className="quick-link">
                              <div className="sublink">
                                  <ul>
                                      <li className="nav-title">
                                          <a className="nav-link" href="#">Solution Overview</a>
                                      </li>
                                  </ul>
                              </div>
                              <div className="sublink">
                                  <ul>
                                      <li className="nav-title">
                                          <a className="nav-link" href="#">Solution Details</a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </li>
          {/* **************************** Services ******************************* */}
          <li className="nav-item dropdown" onClick={toggleMenuActive}>
          <Link className="nav-link dropdown-toggle" href={'/services'}>Services</Link>
{/* 
              <a class="nav-link dropdown-toggle" onClick={servicesToggle} href="#" id="solutions-menu" role="button">
                  Services
              </a> */}
              <div className="solutionsMenu dropdown-menu" style={{display:dropServices}} aria-labelledby="solutions-menu">
                  <div className="content">
                      <div className="wrapper">
                          <div className="quick-link">
                              <div className="sublink">
                                  <ul>
                                      <li className="nav-title">
                                          <a className="nav-link" href="#">Solution Overview</a>
                                      </li>
                                  </ul>
                              </div>
                              <div className="sublink">
                                  <ul>
                                      <li className="nav-title">
                                          <a className="nav-link" href="#">Solution Details</a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </li>
          {/* *********************************************************** */}
              <li className="nav-item dropdownLi">
          <Link className="nav-link dropdown-toggle" href={'/ContactUs'}>Contact Us</Link>
                
                {/* <a className="nav-link dropdown-toggle" href="#" id="news-menu" role="button">Contact Us</a> */}
                <div className="newsMenu dropdown-menu" aria-labelledby="news-menu">
                  <div className="content">
                    <div className="wrapper">
                      <div className="quick-link">
                        <div className="sublink">
                          <ul>
                            <li className="nav-title"><a className="nav-link" href="#">List of News</a></li>
                          </ul>
                        </div>
                        <div className="sublink">
                          <ul>
                            <li className="nav-title"><a className="nav-link" href="#">Subscribe</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdownLi">
                <a className="nav-link dropdown-toggle nav-bar-flex" href="#" id="mycma-menu" role="button">
                  <i className="fa fa-user-circle-o" aria-hidden="true"></i>My Account
                </a>
                <div className="mycmaMenu dropdown-menu" aria-labelledby="mycma-menu">
                  <div className="content">
                    <div className="wrapper">
                      <div className="quick-link">
                        <div className="sublink">
                          <ul>
                            <li className="nav-title"><a className="nav-link" href="#">Dashboard</a></li>
                          </ul>
                        </div>
                        <div className="sublink">
                          <ul>
                            <li className="nav-title"><a className="nav-link" href="#">Profile</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </header>
      </div>
      {/* {
        show? <Dropdown />:null
      } */}
    

    </>
  );
}

export default Navbar;
