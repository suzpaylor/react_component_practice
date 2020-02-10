import React, { Component } from 'react'
import { render } from 'react-dom'

let bookList = [
    {"title": "something", "author": "dude1", "pages":200},
    {"title": "something2", "author2": "dude2", "pages":210},
    {"title": "something3", "author3": "dude3", "pages":200}
]


const Book = ({title, author, pages}) => {
    return(
        <section>
        <h2>{title}</h2>
        <p>by: {author}</p>
        <p>Pages: {pages}</p>
        </section>
    )
}


const Library = ({books}) => {
    return(
        <div>
            {books.map(
                book => <Book title={book.title} author={book.author}/>
            )}
        </div>
    )
}

render(
    <Library books = {bookList}/>
 , 
     document.getElementById('root')
)