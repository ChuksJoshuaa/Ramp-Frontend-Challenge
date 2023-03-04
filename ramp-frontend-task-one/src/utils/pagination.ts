import { TransactionProps } from "./interface";

export const paginate = (followers: TransactionProps[]) => {
  const itemsPerPage = 5;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });

  return newFollowers;
};
