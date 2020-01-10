const books = [
    {
        name:'book1',
        publishedYear: 2000,
        author: 1
    },
    {
        name:'book2',
        publishedYear: 1995,
        author: 2
    },
    {
        name:'book3',
        publishedYear: 2012,
        author: 1
    },
    {
        name:'book4',
        publishedYear: 1995,
        author: 3
    },
    {
        name:'book5',
        publishedYear: 2010,
        author: 2
    }
];

const authors = [
    {
        id: 1,
        name: 'jhon'
    },
    {
        id: 2,
        name: 'david'
    },
    {
        id: 3,
        name: 'crystal'
    }
];

const searchBookByAuthor = (authorName) => {
    const authorId = authors.find(author => author.name === authorName).id;
    return books.filter(book => book.author === authorId).map(book => book.name);
}

console.log("To print books written by author name:");
 let bookname = function(author) {
 const booksOut = [];
 authors.forEach(function(authors) {
 if(author === authors.name) {
    // console.log(authors.id);
     for(let book of books) {
         if(book.author === authors.id) {
             
             booksOut.push(book.name);
         }
     }
 }
});
return booksOut;
}
let res = searchBookByAuthor("jhon");
console.log('new output', res);

console.log("***********");
console.log("To print books between published year:");

let publishedyear = function(frmyr,toyr) {
const publishedBooks = [];
for(let yrs of books) {
    if(yrs.publishedYear >= frmyr && yrs.publishedYear <= toyr) {
        publishedBooks.push("name:" + yrs.name);
        publishedBooks.push("publishedYear:" + yrs.publishedYear);
        for(let auth of authors) {
            if(auth.id === yrs.author) {
               // console.log(auth.name);
                publishedBooks.push("author:" + auth.name);
            }
        }
    }
}
return publishedBooks;
}
const booksobject = publishedyear(2010,2012);
console.log(booksobject);
