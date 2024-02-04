import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";
import Reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  
  filters: {
    text: "",
    category: "all",
    company:"all",
    color: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

export const FilterProviderContext = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(Reducer, initialState);

  // set Grid Vew
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  // set List View

  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  // To Get the DropDown Value

  const sorting = (event) => {
    const userValue = event.target.value;
    return dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  // For Search Section
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  // TO get Clear Filter

  const clearFilters = () => {
   dispatch ({ type : "CLEAR_FILTER"});
  };

  // To Get The DropDown Value

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sorting_value, state.filters]);

  // useEffect(() => {
  //   dispatch({ type: "FILTER_PRODUCTS" });
  //   dispatch({ type: "SORTING_PRODUCTS" });
  // }, [products, state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting, updateFilterValue, clearFilters, }}
    >
      {children}
    </FilterContext.Provider>
  );
};
export const useFilterContext = () => {
  return useContext(FilterContext);
};
