function getTotalBooksCount(books) {}

function getTotalAccountsCount(accounts) {}

function getBooksBorrowedCount(books) {}

function getMostCommonGenres(books) {}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const checkedBooks = books.filter((book) => book.borrows.some((status) => status.returned == false));
  return checkedBooks.length;
}
// loop thorugh books. check if genre exists. if it does then incriment counter by one. else create object and set to 1.
//use helper function for slice
// use .slice(0, 5);
function getMostCommonGenres(books) {
  let list = {}
  books.forEach((book) => {
    if(list[book.genre]){
      list[book.genre]++
    }
    else{
      list[book.genre] = 1;
    }
  });
  let genres = Object.entries(list).map(([name, count]) => {
    return {name, count};
  });
  return getTopFive(genres);
  /* use helper function to get the final result.
  .sort()
  .slice()*/
}

function getMostPopularBooks(books) {
  let popularBooks = books.map((book) => {
    return {name: book.title, count: book.borrows.length}
  });
  return getTopFive(popularBooks);
}

function getMostPopularAuthors(books, authors) { 
  let authorBorrows = authors.map((author) => {
    let counter = 0;
    books.forEach((book) => {
      if(book.authorId == author.id){
        counter += book.borrows.length;
      }
    })
    return {name: author.name.first + " " + author.name.last, count: counter}
  }).sort((a,b) => b.count - a.count).slice(0,5)
  return authorBorrows;
}


function getTopFive(list) {
  return list.sort((index1, index2) => (index1.count > index2.count ? -1 : 1)).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
