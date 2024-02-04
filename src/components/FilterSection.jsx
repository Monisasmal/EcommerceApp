import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filterContext";
import { FaCheck } from "react-icons/fa";
import FormatPrice from "../helpers/FormatPrice";
import {Button} from "../styles/button";

const FilterSection = () => {
  const {
    filters: { text, category, color, price, maxPrice, minPrice },
    all_products,
    updateFilterValue,
    clearFilters,
  } = useFilterContext();

  // To get Unique Data
  const getUniqueData = (data, prop) => {
    let newVal = data.map((curElem) => {
      return curElem[prop];
    });

    if (prop === "colors") {
      newVal = newVal.flat();
    }
    return (newVal = ["all", ...new Set(newVal)]);
  };
  // For Category Section
  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            placeholder="Search..."
            onChange={updateFilterValue}
          />
        </form>
      </div>

      {/* For Category Part */}

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === category ? "active" : ""}
                onClick={updateFilterValue}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>

      {/* For Commpany part */}

      <div className="filter-company">
        <h3>Company</h3>
        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onClick={updateFilterValue}
          >
            {companyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      {/* For Color Part */}

      <div className="filter-colors colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
          {colorsData.map((curColor, index) => {
            if (curColor === "all") {
              return (
                <button
                  type="button"
                  name="color"
                  key={index}
                  value={curColor}
                  className="color-all--style"
                  onClick={updateFilterValue}
                >
                  all
                </button>
              );
            }
            return (
              <button
                type="button"
                name="color"
                key={index}
                value={curColor}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={updateFilterValue}
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          max={maxPrice}
          min={minPrice}
          value={price}
          onChange={updateFilterValue}
        ></input>
      </div>
      <div className="filter-clear">
        <Button className="btn" onClick={clearFilters}>Clear Filter</Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
padding: 5rem 0;
display: flex;
flex-direction: column;
gap: 3rem;

h3{
  padding: 2rem 0;
  font-size: bold;
  margin-left: 12rem;
}
.filter-search{
  input{
    padding: 0.6rem 1rem;
    width: 80%;
    margin-left: 12rem;
  }
}

.filter-category{
  div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.4rem;
    margin-left: 12rem;

    button{
         border:none;,
         background-color: ${({ theme }) => theme.colors.white};
         text-transform: capitalize;
         cursor: pointer;

         &:hover{
          color: ${({ theme }) => theme.colors.btn}
         }
    }
    .active{
      border-bottom: 1px solid #000;
      color: ${({ theme }) => theme.colors.btn}
    }
  }
}

.filter-company--select{
  padding: 0.3rem 1rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
  margin-left: 12rem;
}
.filter-color-style{
  display:flex;
  justify-content:center;
  margin-left: 12rem;
}
.color-all--style{
  background-color: transparent;
  text-transform: capitalize;
  border:none;
  cursor:pointer;
}
.btnStyle{
 height: 2rem;
 width:2rem;
 border-radius: 50%;
 background-color: #000;
 margin-left: 1rem;
 border: none;
 outline: none;
 opacity: 0.5;
 cursor: pointer;

 &:hover{
  opacity:1;
 }
}
.active{
  opacity:1;
}
 .checkStyle{
  font-size: 1rem;
  color:#fff;
 }
 .filter_price{
  input{
    margin: 0.5rem 0 1rem 0;
    padding: 0;
    bax-shadow: none;
    cursor:pointer; 
    margin-left: 12rem;
  }
  
   p {
    margin-left: 12rem;
  }
 }
 .filter-shipping{
  display:flex;
  align-items:center;
  gap: 1rem;
 }
 .filter-clear .btn{
  background-color:#ec7063;
  color:#000;
  margin-left: 12rem;
 }

`;

export default FilterSection;
