const Header = () => {
  return (
    <div className="mt-5 py-3">
      <h3 className="text-2xl md:text-4xl text-gray-900 font-bold leading-tight">
        Approve Transactions
      </h3>
      <p className="py-3 text-md md:text-lg text-gray-800 font-medium leading-tight">
        Your company uses Ramp as their main financial instrument. You are a
        manager and you need to approve the transactions made by your
        employees. Select the checkbox on the right to approve or decline the
        transactions. You can filter transactions by employee.
      </p>
      <p className="border-b-2 border-gray-100 py-2"></p>
      <p className="text-gray-600 text-sm pt-4 pb-0">Filter by employee</p>
    </div>
  );
};

export default Header;
