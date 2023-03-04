import { useEffect } from "react";
import {
  setPage,
  setPagination,
  setSelected,
} from "../redux/features/transaction/transactionSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Pagination = () => {
  const dispatch = useAppDispatch();
  const { paginator, page, paginatedTransactions } = useAppSelector(
    (state) => state.data
  );

  const newPage = () => {
    let nextPage = page + 1;
    if (nextPage > paginatedTransactions.length - 1) {
      nextPage = 0;
    }
    return nextPage;
  };

  const Paginate = () => {
    dispatch(setPagination(true));
    dispatch(setPage(newPage()));
    dispatch(setSelected("All Employees"));
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(setPagination(false));
    }, 900);
  }, [paginator]);

  return (
    <div>
      <div className="h-[2.2rem] mt-5 w-full shadow bg-slate-200">
        <h3
          className={`text-center pt-1.5 text-md cursor-pointer ${
            paginator ? "font-medium" : "font-bold"
          }`}
          onClick={Paginate}
        >
          View More
        </h3>
      </div>
    </div>
  );
};

export default Pagination;
