import { createSlice } from "@reduxjs/toolkit";
import { IIProps } from "../../../utils/interface";

const initialState: IIProps = {
  isLoading: true,
  employees: [],
  transactions: [],
  filteredTransactions: [],
  paginator: false,
  paginatedTransactions: [],
  page: 0,
  selected: "All Employees",
};

export const transactionSlice = createSlice({
  name: "data",

  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.isLoading = action.payload;
    },

    setEmployees: (state, action) => {
      state.employees = action.payload;
    },

    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },

    setFilteredTransactions: (state, action) => {
      state.filteredTransactions = action.payload;
    },

    setPagination: (state, action) => {
      state.paginator = action.payload;
    },

    setPaginationTransactions: (state, action) => {
      state.paginatedTransactions = action.payload;
    },

    setPage: (state, action) => {
      state.page = action.payload;
    },

    setSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const {
  setLoader,
  setEmployees,
  setTransactions,
  setFilteredTransactions,
  setPagination,
  setPaginationTransactions,
  setPage,
  setSelected,
} = transactionSlice.actions;

export default transactionSlice.reducer;
