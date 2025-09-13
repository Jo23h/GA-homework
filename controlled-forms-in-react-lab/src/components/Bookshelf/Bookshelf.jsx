import { useState } from 'react'

function Bookshelf() {

    const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
   
    const [newBook, setNewBook] = useState(
    {title: '', author: ''}
    )

    const handleInputChange = (event) => {
        // Adds input as additional value to existing state from newBook
        setNewBook({...newBook, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add new book to existing books array
        setBooks([...books, newBook])

        // Reset inputs for title and author
        setNewBook({title: '', author: '' });
    }

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit = {handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input
                        id = "title"
                        name = "title"
                        // Shows the current title from state
                        value = {newBook.title}
                        onChange = {handleInputChange}
                    />
                    <label htmlFor="author">Author</label>
                    <input
                        id = "title"
                        name = "author"
                        value ={newBook.author}
                        onChange = {handleInputChange}
                    />
                    <button type="submit">Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((book, index)=>(
                    <div key={index}>
                        <p>{book.title}</p>
                        <p>{book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Bookshelf

