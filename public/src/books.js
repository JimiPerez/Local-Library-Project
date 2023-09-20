function findAuthorById(authors, authorId) {
  return authors.find((author) => author.id === authorId);
}

function findBookById(books, bookId) {
  return books.find((book) => book.id === bookId);
}

function partitionBooksByBorrowedStatus(books) {
  const checkedBooks = books.filter((book) => book.borrows.some((status) => status.returned == false));
  const returnedBooks= books.filter((book) => book.borrows.every((status) => status.returned == true));
  return [checkedBooks, returnedBooks];
}
/* book.borrows.map() to return each account with the id and returned 
*/
function getBorrowersForBook(book, accounts) {
  const borrows = book.borrows;
  let results = borrows.map((borrow) => {
    const account = accounts.find((account) => account.id === borrow.id);
    return {...account, ...borrow};
  })
  return results.slice(0,10);
  }








module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
