import { useEffect } from "react";
import { Pagination } from ".";
import {
  setFilteredTransactions,
  setLoader,
} from "../redux/features/transaction/transactionSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { TransactionProps } from "../utils/interface";
import Loader from "./Loader";

const Transactions = () => {
  const dispatch = useAppDispatch();
  const { isLoading, page, filteredTransactions, paginatedTransactions } =
    useAppSelector((state) => state.data);

  



  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoader(false));
    }, 900);
  });

  useEffect(() => {}, [page]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="h-full w-full mt-5 py-2">
      {filteredTransactions.map((item: TransactionProps, index: number) => (
        <div className="h-[6rem] border border-gray-100 shadow" key={index}>
          <div className="flex justify-between p-4" key={item.id}>
            <div>
              <h2>{item.merchant}</h2>
              <h1>{item.amount}</h1>
              <p>
                {item.employee.firstName} {item.employee.lastName} - {item.date}
              </p>
            </div>
            <input
              type="checkbox"
              value={item.date}
              checked={item.approved}
              onChange={(e) => console.log(e.target.checked)}
            />
          </div>
        </div>
      ))}
      <Pagination />
    </div>
  );
};

export default Transactions;
