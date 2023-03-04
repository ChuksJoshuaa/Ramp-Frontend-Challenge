import { useEffect, useState } from "react";
import {
  setFilteredTransactions,
  setLoader,
  setSelected,
} from "../redux/features/transaction/transactionSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { EmployeeProps } from "../utils/interface";

const Employees = () => {
  const [firstName, setFirstName] = useState("All");
  const [isShow, setIsShow] = useState(false);
  const { employees, transactions, paginatedTransactions, page, selected } =
    useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();

  const handleChange = () => {
    const paginateData = paginatedTransactions[page];
    if (firstName === "All") {
      dispatch(setFilteredTransactions(paginateData));
    } else {
      const findData = transactions.filter(
        (item) => item.employee.firstName === firstName
      );
      dispatch(setFilteredTransactions(findData));
    }
  };

  useEffect(() => {
    handleChange();
  }, [firstName]);

  return (
    <div className="relative">
      <div
        className="h-[3.8rem] shadow border-b border-b-gray-900 border border-gray-100"
        onClick={() => setIsShow((prevaState) => !prevaState)}
      >
        <h3 className="p-4 text-md md:text-xl">{selected}</h3>
      </div>

      {isShow && (
        <div className="absolute mt-[2em] h-[244px] w-full bg-white shadow">
          <h3
            className={`p-4 text-md md:text-xl border-b border-gray-300 hover:bg-gray-300 ${
              selected === "All Employees" && "font-bold"
            }`}
            onClickCapture={() => {
              setFirstName(`All`);
              setIsShow(false);
              dispatch(setLoader(true));
              dispatch(setSelected("All Employees"));
            }}
          >
            All Employees
          </h3>
          {employees.map((item: EmployeeProps) => (
            <h3
              key={item.id}
              className={`p-4 text-md md:text-xl border-b border-gray-300 hover:bg-gray-300 ${
                selected.includes(item.firstName) && "font-bold"
              }`}
              onClickCapture={() => {
                setFirstName(`${item.firstName}`);
                setIsShow(false);
                dispatch(setLoader(true));
                dispatch(setSelected(`${item.firstName} ${item.lastName}`));
              }}
            >
              {item.firstName} {""} {item.lastName}
            </h3>
          ))}
        </div>
      )}
    </div>
  );
};

export default Employees;
