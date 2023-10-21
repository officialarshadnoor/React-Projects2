import React from 'react'
import { NoteStyle } from './NoteStyle';
import { MdOutlineNoteAlt,MdDeleteForever } from 'react-icons/md';
import {Icons,DeleteIcon } from './NoteStyle';


const NewNote = () => {
  return (
    <NoteStyle className='card'>NewNote
    <div className="card-header text-right">
        <Icons>
        <MdOutlineNoteAlt/>
        <DeleteIcon><MdDeleteForever/></DeleteIcon>
        </Icons>
    </div>
    
    
    </NoteStyle>
  )
}

export default NewNote