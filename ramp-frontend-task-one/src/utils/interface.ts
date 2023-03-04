export interface EmployeeProps {
  id: string;
  firstName: string;
  lastName: string;
}

export interface TransactionProps {
  id: string;
  amount: number;
  employee: {
    id: string;
    firstName: string;
    lastName: string;
    extras: number;
  };
  merchant: string;
  date: string;
  approved: true;
}

export interface IIProps {
  isLoading: boolean;
  employees: EmployeeProps[];
  transactions: TransactionProps[];
  filteredTransactions: TransactionProps[];
  paginatedTransactions: TransactionProps[];
  paginator: boolean;
  page: number;
}

export interface IITransaction {
  transactionData: React.SetStateAction<TransactionProps[] | any>;
}
