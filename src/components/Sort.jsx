import React from "react";
import styled from "styled-components";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
import { useFilterContext } from "../context/filterContext";

const Sort = () => {
  const { grid_view, setGridView, setListView, filter_products,sorting } =
  useFilterContext();
return (
  <Wrapper className="sort-style">
    {/* 1st part  */}
    <div className="sorting-list--grid">
      <button
        className={grid_view ? "active sort-btn" : "sort-btn"}
        onClick={setGridView}>
        <BsFillGrid3X3GapFill className="icon" />
      </button>
      <button
          className={!grid_view ? "active sort-btn" : " sort-btn"}
          onClick={setListView}>
          <BsListUl className="icon" />
        </button>
      </div>
      {/* 2nd part  */}
      <div className="product-data">
        <p>{`${filter_products.length}`}Product Available</p>
      </div>

      {/* 3rd part  */}
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select name="sort" id="sort" className="sort-selection--style" onClick={sorting}>
            {/* <option value= "All">All</option>
            <option value="#" disabled></option>  */}
            <option value="lowest">Price(Lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(Highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Prize(A-Z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Prize(Z-A)</option>
          </select>
        </form>
     </div>
    </Wrapper>
  );
};


const Wrapper = styled.section`

    display:flex;
    justify-content: space-between;
    margin-left:12rem;
    margin-top: 4rem;
    max-width:80rem;


  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn{
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      font-size: 2rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.8rem;
    cursor: pointer;

    .sort-selection--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 20px;
    }
  }
`;

export default Sort;


// import React from "react";
// import styled from "styled-components";
// import { BsFillGridFill, BsList } from "react-icons/bs";
// import { useFilterContext } from "../context/filterContext";

// const Sort = () => {
//   const { filter_products, grid_view, setGridView, setListView, sorting } =
//     useFilterContext();
//   return (
//     <Wrapper className="sort-section">
//       {/* 1st column  */}
//       <div className="sorting-list--grid">
//         <button
//           className={grid_view ? "active sort-btn" : "sort-btn"}
//           onClick={setGridView}>
//           <BsFillGridFill className="icon" />
//         </button>

//         <button
//           className={!grid_view ? "active sort-btn" : " sort-btn"}
//           onClick={setListView}>
//           <BsList className="icon" />
//         </button>
//       </div>
//       {/* 2nd column  */}
//       <div className="product-data">
//         <p>{`${filter_products.length} Product Available`}</p>
//       </div>

//       {/* 3rd column  */}
//       <div className="sort-selection">
//         <form action="#">
//           <label htmlFor="sort"></label>
//           <select
//             name="sort"
//             id="sort"
//             className="sort-selection--style"
//             onClick={sorting}>
//             <option value="lowest">Price(lowest)</option>
//             <option value="#" disabled></option>
//             <option value="highest">Price(highest)</option>
//             <option value="#" disabled></option>
//             <option value="a-z">Price(a-z)</option>
//             <option value="#" disabled></option>
//             <option value="z-a">Price(z-a)</option>
//           </select>
//         </form>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 5rem;

//   .sorting-list--grid {
//     display: flex;
//     gap: 2rem;

//     .sort-btn {
//       padding: 0.8rem 1rem;
//       border: none;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       cursor: pointer;
//     }

//     .icon {
//       font-size: 1.6rem;
//     }
//     .active {
//       background-color: ${({ theme }) => theme.colors.black};
//       color: #fff;
//     }
//   }

//   .sort-selection .sort-selection--style {
//     padding: 0.5rem;
//     cursor: pointer;

//     .sort-select--option {
//       padding: 0.5rem 0;
//       cursor: pointer;
//       height: 2rem;
//       padding: 10px;
//     }
//   }
// `;

// export default Sort;
