"use strict";
const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

const Pagination = {
  book: [],
  Page: 0,
  init(arr, pageSize) {
    if (!Array.isArray(arr)) {
      return `False input... please check it`;
    }
    if (pageSize > arr) {
      return `The page size is too big for the given arr`;
    }

    let Arr = [];
    for (let i = 0; i < arr.length; i++) {
      Arr.push(arr[i]);
      if (Arr.length === pageSize) {
        Pagination.book.push(Arr);
        Arr = [];
      }
      if (i === arr.length - 1 && Arr.length !== 0) {
        Pagination.book.push(Arr);
      }
    }
  },
  getPageItems() {
    console.log(
      `The page ${Pagination.Page + 1} has `,
      Pagination.book[Pagination.Page]
    );
  },
  prevPage() {
    if (Pagination.Page === 0) {
      Pagination.Page = Pagination.book.length - 1;
    } else Pagination.Page--;
    console.log(`The prev page has`, Pagination.book[Pagination.Page]);
  },
  nextPage() {
    if (Pagination.Page === Pagination.book.length - 1) {
      Pagination.Page = 0;
    } else Pagination.Page++;
    console.log(`The next page has`, Pagination.book[Pagination.Page]);
  },
  firstPage() {
    Pagination.Page = 0;

    console.log(`The first page runs`, Pagination.book[Pagination.Page]);
  },
  lastPage() {
    Pagination.Page = Pagination.book.length - 1;

    console.log(`The last page runs`, Pagination.book[Pagination.Page]);
  },
  goToPage(page) {
    Pagination.Page = page;
    console.log(`The ${page} has`, Pagination.book[Pagination.Page]);
  },
};

Pagination.init(alphabetArray, 4);
Pagination.prevPage();
Pagination.getPageItems(); // Page: 1 | [ 'a', 'b', 'c', 'd' ]
Pagination.nextPage();
Pagination.getPageItems(); // ['e', 'f', 'g', 'h']
Pagination.lastPage();
Pagination.getPageItems(); //[ 'y', 'z' ]
Pagination.firstPage();
Pagination.getPageItems(); //[ 'a', 'b', 'c', 'd' ]
Pagination.goToPage(3);
Pagination.getPageItems(); //[ 'm', 'n', 'o', 'p' ]
