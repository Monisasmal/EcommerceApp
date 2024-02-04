import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import { Button } from "../styles/button";

const HeroSection = ({myData}) => {
  const {name} =myData
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome To</p>
            <h2>{name}</h2>
            <p className="para">
            Welcome to our one-stop destination for cutting-edge technology! Explore our eCommerce store and discover a curated collection of the latest mobile phones and laptops. Immerse yourself in the world of innovation, where sleek designs meet powerful performance
             </p>
            <NavLink>
              <Button>Shop Now</Button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <figure>
              <img src="Images/Image1.jpeg" alt="hero-Image" className="img-style"/>
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};


const Wrapper = styled.section`
padding: 12rem 0;

img{
  min-width:10rem;
  height:10rem;
  
}
.hero-section-data{
   margin-left:20rem;
  .para{
    margin-bottom: 2rem;
  }
  .intro-data p{
    margin: 2rem 0;
    
  }
  h2{
    text-transform: capitalize;
    font-weight: semi-bold;
    margin-bottom:1rem;
  }
  .intro-data{
    margin-bottom:1rem;
  }
}
.hero-section-image{
  width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
figure {
  position: relative;

  &::after {
    content: "";
    width: 35%;
    height: 80%;
    background-color: rgba(81, 56, 238, 0.4);
    position: absolute;
    left: 50%;
    top: -3.6rem;
    z-index: -1;
      }
}
.img-style {
  width: 80%;
  height: auto;
}


  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    .hero-section-data{
      margin-left:0rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
   
  
}`;

export default HeroSection;
