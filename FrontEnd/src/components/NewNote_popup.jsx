import React from 'react'
import './stylesheet/NewNote_popup.css'
import { useState } from 'react'
import close_icon from '../assets/images/black_cross_icon.svg'
import { useContextProvider } from '../Contexts/ context'

const NewNote_popup = ({onClose}) => {

    const {noteName, setNoteName} = useContextProvider();
    // console.log(noteName, 'hello');
  return (
    <div className='notepopup-main'>
      <div className="notepopup-container">

        <div className="notepopup-content">
          <p>New Task</p>
          <input type="text" name="" value={noteName} onChange={(e) => setNoteName(e.target.value)} id="" />
          <div className='notePopup-btn-div'>    
            <button>Enter</button>
          </div>
        </div>

        <button className='close-icon-btn' onClick={onClose}><img src={close_icon} alt="" /></button>
      </div>
    </div>
  )
}

export default NewNote_popup