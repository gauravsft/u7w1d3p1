const express = require('express');

const app = express();


const booksData = [
    {
        "author": "Miguel",
        "country": "Spain",
        "imageLink": "images/don-quijote-de-la-mancha.jpg",
        "language": "Spanish",
        "link": "https://en.wikipedia.org/wiki/Don_Quixote\n",
        "pages": 1056,
        "title": "Don Quijote De La Mancha",
        "year": 1610
    },
    {
        "author": "Geoffrey Chaucer",
        "country": "England",
        "imageLink": "images/the-canterbury-tales.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/The_Canterbury_Tales\n",
        "pages": 544,
        "title": "The Canterbury Tales",
        "year": 1450
    },
    {
        "author": "Anton",
        "country": "Russia",
        "imageLink": "images/stories-of-anton-chekhov.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov\n",
        "pages": 194,
        "title": "Stories",
        "year": 1886
    },
    {
        "author": "Joseph",
        "country": "United Kingdom",
        "imageLink": "images/nostromo.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Nostromo\n",
        "pages": 320,
        "title": "Nostromo",
        "year": 1904
    },
    {
        "author": "Charles Dickens",
        "country": "United Kingdom",
        "imageLink": "images/great-expectations.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Great_Expectations\n",
        "pages": 194,
        "title": "Great Expectations",
        "year": 1861
    },
]

app.use(express.json());

app.get("/books", allBooks, books);
app.get("/book/:name", book);


function allBooks(req, res, next) {
    console.log('Fetching all books');
    next();
}

function books(req, res) {
    return res.status(200).send(booksData);
}

function book(req, res) {
    const bookName = req.params.name;
    console.log(bookName);
    return res.status(200).send({ book_name: bookName });

}


app.listen(3000);