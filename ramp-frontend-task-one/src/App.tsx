import { useEffect } from "react";
import { Employees, Header, Transactions } from "./components";
import {
  setEmployees,
  setFilteredTransactions,
  setPaginationTransactions,
  setTransactions,
} from "./redux/features/transaction/transactionSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import data from "./utils/data";
import { TransactionProps } from "./utils/interface";
import { paginate } from "./utils/pagination";

function App() {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.data);

  const getData = () => {
    if (data) {
      const employeeData = data.employees;
      const transactionData = data.transactions;

      dispatch(setEmployees(employeeData));
      dispatch(setTransactions(transactionData));
      dispatch(
        setPaginationTransactions(
          paginate(transactionData as TransactionProps[])
        )
      );
      dispatch(
        setFilteredTransactions(
          paginate(transactionData as TransactionProps[])[page]
        )
      );
    }
  };

  useEffect(() => {
    getData();
  }, [page]);
  return (
    <div className="main-container">
      <Header />
      <Employees />
      <Transactions />
    </div>
  );
}

export default App;
