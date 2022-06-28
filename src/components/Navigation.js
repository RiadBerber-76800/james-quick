import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Navigation() {

  // Création de la variable pour le style la nav.active (effet surligné et gras pour indiquer la page sélectionnée)
  
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      borderBottom: isActive ? "3px solid #f00" : "",
    };
  };
  return (
    <NavContainer>
      <div className="lg:container mx-auto">
        <div className="text-center">
          <NavLink style={navLinkStyles} to="/">
            <h1 className="text-center font-bold text-4xl pt-10 ">
              James <span className="text-red-700 font-bold ">Q</span> Quick
            </h1>
          </NavLink>
          <p className="text-center pt-2 text-xl">
            Developper. Speaker. Teacher
          </p>
          <div>
            <ul className="flex justify-center uppercase space-x-5 pt-4 pb-10 ">
              <NavLink style={navLinkStyles} to="blog">
                <li>Blog</li>
              </NavLink>
              <NavLink style={navLinkStyles} to="courses">
                <li>Courses</li>
              </NavLink>
              <NavLink style={navLinkStyles} to="contact">
                <li>Contact</li>
              </NavLink>
              <NavLink style={navLinkStyles} to="newsletter">
                <li>Newsletter</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </NavContainer>
  );
}
const NavContainer = styled.nav``;
