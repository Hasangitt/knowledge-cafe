import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
  
  const [bookmarks, setBookmark]= useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const hadleAddtoBookmark = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmark(newBookmarks);
  }

  const handleReadingTime = (time, id) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    const remaining = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmark(remaining)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs hadleAddtoBookmark={hadleAddtoBookmark} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks
        bookmarks={bookmarks}
        readingTime={readingTime}
        ></Bookmarks>
      </div>
      
    </>
  )
}

export default App
