import { useEffect } from "react";
import { Pagination, Loader } from ".";
import {
  setLoader,
  setFilteredTransactions,
} from "../redux/features/transaction/transactionSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Emp, TransactionProps } from "../utils/interface";

const Transactions = () => {
  const dispatch = useAppDispatch();
  const { isLoading, filteredTransactions } = useAppSelector(
    (state) => state.data
  );

  const handleChange = (e: React.ChangeEvent) => {
    const checkValue = (e.target as HTMLInputElement).checked;
    const getId = (e.target as HTMLInputElement).value;

    const filteredValue = filteredTransactions.find(
      (item) => item.id === getId
    );
    const filteredCheck = filteredTransactions.findIndex(
      (item) => item.id === getId
    );

    if (filteredCheck !== -1) {
      const newArray = [...filteredTransactions];
      newArray[filteredCheck] = {
        id: filteredValue?.id as string,
        amount: Number(filteredValue?.amount),
        date: filteredValue?.date as string,
        employee: filteredValue?.employee as Emp,
        merchant: filteredValue?.merchant as string,
        approved: checkValue as boolean,
      };

      dispatch(setFilteredTransactions(newArray));
    }
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoader(false));
    }, 900);
  });

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
              value={item.id}
              checked={item.approved}
              onChange={handleChange}
            />
          </div>
        </div>
      ))}
      <Pagination />
    </div>
  );
};

export default Transactions;
