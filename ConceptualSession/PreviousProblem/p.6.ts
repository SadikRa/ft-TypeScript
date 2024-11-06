{

    ///

    type Book = {
        title: string;
        author: string;
        publishYear: number
    }

    function isRecentBook(book: Book) : boolean {
        const currentYear = new Date().getFullYear();
        return currentYear - book.publishYear <= 5;

    }

    console.log(isRecentBook({
        title: 'hari potter',
        author: 'jk roline',
        publishYear: 2019
    }));

    ///
}