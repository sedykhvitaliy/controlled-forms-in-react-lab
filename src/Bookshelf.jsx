import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ])
    const [newBook, setNewBook] = useState({
        title:'',
        author:'',
    })
    const handleInputChange = (event) => {
        setNewBook({...newBook, [event.target.name]: event.target.value});
        console.log(newBook.title)
        console.log(newBook.author)
    };
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(newBook)
        setBooks([...books, newBook])
        console.log(books);
    }

return (
<>
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title:</label>
        <input id='title' 
               name='title' 
               value={newBook.title} 
               onChange={handleInputChange} />

        <label htmlFor='author'>Author:</label>
        <input id='author' 
               name='author' 
               value={newBook.author} 
               onChange={handleInputChange} />  

               <button type="submit">Add</button>    
    </form>
  </div>
  <div className="bookCardsDiv">{books.map((book, idx) =>
  <div id='eachBook' key={idx}>
    <div id='title'>
        <h4>{book.title}</h4>
        </div>
        <div id='author'>
            Author: {book.author}
            </div>
            </div>
)}</div>
</div>
</>
)
}
export default Bookshelf;