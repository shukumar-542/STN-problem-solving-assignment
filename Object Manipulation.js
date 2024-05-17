const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        year: 1851
    }
];

const bookName = (books)=>{
    const book = books.map(book => book.title)
    return book
}
const result = bookName(books)
console.log(result);

