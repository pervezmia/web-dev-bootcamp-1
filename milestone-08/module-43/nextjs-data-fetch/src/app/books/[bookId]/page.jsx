
// export const generateStaticParams = async () => {
//     const res = await fetch ("http://localhost:5000/books");
//     const books = await res.json();

//     return books.slice(1,3).map(book => ({bookId: book.id}));

// }

const BookDetailsPage = async ({params}) => {
    const {bookId} = await params;

    const res = await fetch (`http://localhost:5000/books/${bookId}`)
    // const book = await res.json();
    // const book = books.filter(book => bookId === book.id);
    // console.log(book);
    const {author, title, price} = await res.json();
    return (
        <div className="text-center space-y-3.5 border p-10 rounded-2xl w-[80%] mx-auto">
            <h2>book details: {bookId}</h2>
            <h2 className="font-bold text-2xl">{title}</h2>
            <p>{author}</p>
            <button className="btn btn-success">{price}</button>
        </div>
    );
};

export default BookDetailsPage;