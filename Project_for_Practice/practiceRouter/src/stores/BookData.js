
import { defineStore } from 'pinia'

export const useBookStore = defineStore('user',{
  state: () =>({
    booklist:[{bookname:'', bookauthor:''}],
  }),
  actions: {
    addBookData(bookData){
      this.booklist.push(bookData);
    },
    // DeleteBook(bookData){
    //   this.booklist.shift(bookData);
    // }
  }
});
