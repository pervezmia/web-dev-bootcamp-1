import BookCard from "@/components/BookCard";


const BookPage = async () => {
    /*
     **cache: no-store --> It will fetch the data on every request, and it will not cache the data . 
      SSR = Server Side Rendering

     ** cache: force-cache --> it will cache the data, and it will not fetch the data on every request. SSG

     ** Next: {revalidate: 20} --> It will cache the data for 20 seconds, and after 20 seconds, it will fetch the data again. 
     ISR

    */
    const res = await fetch("http://localhost:5000/books", {cache: "no-store"});
    const books = await res.json();
    return (
        <div className="space-y-2.5 max-w-[90%] mx-auto">
            <h2>Books: {books.length}</h2>
            <div className="grid grid-cols-3 gap-3.5 ">

                {
                    books.map(book => <BookCard key={book.id} book = {book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default BookPage;