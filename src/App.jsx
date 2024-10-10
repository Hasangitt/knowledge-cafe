import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
  
  const [bookmarks, setBookmark]= useState([]);


  const hadleAddtoBookmark = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmark(newBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs hadleAddtoBookmark={hadleAddtoBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
