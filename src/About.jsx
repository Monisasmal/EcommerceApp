// import React, { useContext } from 'react'
//import styled from 'styled-components';
import HeroSection from "./components/HeroSection";
// import {AppContext} from "./context/productcontext"
import { useProductContext } from "./context/productcontext";
const About = () => {

  const {myName }= useProductContext();
  const data ={
    name: "Manaswini Ecommm",
  };
  
  return(
  <>
  {myName}
  <HeroSection myData={data} />;
  </> 
  );
};

export default About