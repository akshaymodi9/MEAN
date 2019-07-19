import React from 'react'

export class BookData extends React.Component{

    render(){

        var book={

            name:"The fault in our Stars",
            author:"John Green",
            likes:"94%",
            Cover:"http://thebookishdilettante.com/wp-content/uploads/2015/09/the-fault-in-our-stars-book-cover11-200x300.jpg"
        }
        return(
            <div>
                <h1> Book name: {book.name}</h1>
                <h1> Novel By: {book.author}</h1>
                <h1> Likes: {book.likes}</h1>
                <img src= {book.Cover} alt="Book cover"/>
            </div>
        )
    }
}