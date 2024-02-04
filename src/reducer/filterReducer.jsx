const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCT":
      // For range(max amount)
      let priceArr = action.payload.map((curElem) => curElem.price);
      // 1st way to get Max amount
      //  console.log(Math.max.apply(null, priceArr));

      // 2nd Way to get max Amount
      // let maxPrice = priceArr.reduce((initialVal, curVal) => Math.max(initialVal. curVal),0);
      // console.log(
      //     "🚀 ~ file: filterReducer.js ~ line 16 ~ filterReducer ~ maxPrice",
      //     maxPrice)

      // 3rd Way to get Maximum Price
      let maxPrice = Math.max(...priceArr);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;

      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      // let sortingproducts;
      let newSortData;
      //  let tempSortProduct = [...action.payload]

      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);
      // if(state.sorting_value === "All"){
      //   newSortData = tempSortProduct;
      // }

      // if(state.sorting_value === "lowest"){
      //   sortingproducts = (a,b) =>{
      //       return a.price - b.price;
      // }

      // }

      // if(state.sorting_value === "highest"){
      //   sortingproducts = (a,b) =>{
      //     return b.price - a.price;
      //   }

      // }

      // if(state.sorting_value === "a-z"){
      //   newSortData = tempSortProduct.sort((a,b)=>a.name.localeCompare(b.name));
      // }

      // if(state.sorting_value === 'z-a'){
      //   newSortData = tempSortProduct.sort((a,b)=>b.name.localeCompare(a.name));
      // }

      // newSortData = tempSortProduct.sort(sortingproducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, category, company, color, price } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }

      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.category === category
        );
      }

      if (company !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
        );
      }

      if (color !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curElem) =>
          curElem.colors.includes(color)
        );
      }
      if (price === 0) {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.price === price
        );
      } else {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.price <= price
        );
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    case "CLEAR_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          maxPrice: state.filters.maxPrice,
          price: state.filters.maxPrice,
          minPrice: 0,
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
