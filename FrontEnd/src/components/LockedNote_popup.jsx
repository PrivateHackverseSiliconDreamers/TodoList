import React, { useState } from 'react'
import './stylesheet/LockedNotes_popup.css';
import close_icon from '../assets/images/black_cross_icon.svg'
import { useContextProvider } from '../Contexts/ context';

const LockedNote_popup = ({onClose}) => {
  const {taskPassword, setTaskPassword} = useContextProvider();

  return (
    <div className='lockpopup-main'>
    <div className="lockpopup-container">

      <div className="lockpopup-content">
        <p>Enter the password</p>
        <input type="text" name="" value={taskPassword} onChange={(e) => setTaskPassword(e.target.value)} id="" />
        <div className='lockPopup-btn-div'>    
          <button>Enter</button>
        </div>
      </div>

      <button className='close-icon-btn' onClick={onClose}><img src={close_icon} alt="" /></button>
    </div>
  </div>
  )
}

export default LockedNote_popup