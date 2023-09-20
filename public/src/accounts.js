function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1));
}

function getTotalNumberOfBorrows(account, books) {
  let result = books.reduce((acc, book) => {return acc + book.borrows.filter((borrow) => borrow.id === account.id).length
}, 0);
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;
  const checkedOutBooks = [];
  for (let book of books) {
    const {borrows, authorId} = book;
    const isBorrowed = borrows[0].id === accountId && !borrows[0].returned;
    if (isBorrowed) {
      const author = authors.find((author) => author.id === authorId);
      checkedOutBooks.push({...book, author});  
      }
      }
    return checkedOutBooks;
      }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
