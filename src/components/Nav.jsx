import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { useCartContext } from "../context/cartContext";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../styles/button";


const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();
  const { total_item } = useCartContext();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const Nav = styled.nav`
  
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;
      

      .navbar-link {
        &:link,
        &:visited {
          dispaly: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transformation: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
    .cart-trolley--link {
      position: relative;
    
    .cart-trolley {
      position: relative;
      font-size: 3rem;
    }
    .cart-total--item {
      width: 2rem;
      height: 2rem;
      position: absolute;
      background-color: #fff;
      color:#000;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -2.7rem;
      left: 80%;
      background-color: ${({ theme }) => theme.colors.helper};
    }
  }

 
.mobile-nav-btn{
  display: none;
  background-color: transparent;
  cursor: pointer;
  border: none;
}
.mobile-nav-icon[name="close-outline"] {
  display: none;
}

.close-outline{
  display:none;
}
   @media (max-width: ${({ theme }) => theme.media.mobile}) {
  .mobile-nav-btn {
    display: inline-block;
    z-index: 9999;
    border: ${({ theme }) => theme.colors.black};

    .mobile-nav-icon {
      font-size: 4.2rem;
      color: ${({ theme }) => theme.colors.black};
      margin-left: 20px;
    }
  }

  .active .mobile-nav-icon {
    display: none;
    font-size: 4.2rem;
    position: absolute;
    top: 30%;
    right: 10%;
    color: ${({ theme }) => theme.colors.black};
    z-index: 9999;
  }

  .active .close-outline {
    display: inline-block;
  }

  .navbar-lists {
    width: 80vw;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    visibility: hidden;
    opacity: 0;
    transform: translateX(100%);
    /* transform-origin: top; */
    transition: all 3s linear;
  }

  .active .navbar-lists {
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
    z-index: 999;
    transform-origin: right;
    transition: all 3s linear;

    .navbar-link {
      font-size: 2.2rem;
    }
  }

  `;
  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Contact
            </NavLink>
          </li>
          {isAuthenticated && <p style = {{ color: 'red',size:"20px" }} >{user.name}</p>}

          {isAuthenticated ? (
            <li>
              <Button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </Button>
            </li>
          ) : (
            <li>
              <Button onClick={() => loginWithRedirect()}>Log In</Button>
            </li>
          )}

          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">{total_item}</span>
            </NavLink>
          </li>
        </ul>
        {/* Open & Close Button for mobile View */}

        <div className="mobile-nav-btn">
          <CgMenuRight
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Nav;
