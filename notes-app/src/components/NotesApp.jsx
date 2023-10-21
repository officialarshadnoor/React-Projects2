import React from 'react'
import NewNote from './NewNote';

const NotesApp = () => {
  return (
    <div className=''>
        <button className=''>
            + New Note
        </button>
        <container className="container-sm d-flex" style={{gap:25,flexWrap:"wrap"}}>

        </container>
    </div>
  )
}

export default NotesApp