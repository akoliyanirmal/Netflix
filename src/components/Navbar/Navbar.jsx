import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY >= 80) {
          navRef.current.classList.add("nav-dark");
        } else {
          navRef.current.classList.remove("nav-dark");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={navRef} className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" />
          <ul>
            <li>Home</li>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="navbar-right">
          <img className="icons" src={search_icon} alt="Search Icon" />
          <p>Children</p>
          <img className="icons" src={bell_icon} alt="Bell Icon" />
          <div className="navbar-profile">
            <img className="profile" src={profile_img} alt="Profile" />
            <img src={caret_icon} alt="Caret Icon" />
            <div className="dropdown">
              <p
                onClick={() => {
                  logout();
                }}
              >
                Sign Out of Netflix
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
