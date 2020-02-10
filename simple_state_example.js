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

        //for every one of those books create a book component
        //dynamic - when you add more records you don't have to change anything
        //it will map over how many there are
        //need unique identifier


 //LOOK BELOW SIMPLE EXAMPLE OF USING STATE IN CLASS BASED COMPONENT       
class  Library extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            open: true
        }
    }
    render(){
        console.log(this.state)
        const { books } = this.props
        return(
            <div>
            <h1>The libarary is {this.state.open ? 'open' : 'closed'}</h1>
                {books.map(
                (book, i) =>
                <Book 
                 key={i}
                 title={book.title}
                author={book.author}
                pages={book.pages}/>
            )}
            </div>
        )
    }
}





render(
    <Library books = {bookList}/>
 , 
     document.getElementById('root')
)