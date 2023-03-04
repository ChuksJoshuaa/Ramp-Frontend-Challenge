export interface EmployeeProps {
  id: string;
  firstName: string;
  lastName: string;
}

export interface Emp {
  id: string;
  firstName: string;
  lastName: string;
  extras: number;
}

export interface TransactionProps {
  id: string;
  amount: number;
  employee: Emp;
  merchant: string;
  date: string;
  approved: boolean;
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
