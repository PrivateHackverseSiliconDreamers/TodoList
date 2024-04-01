import React from 'react'
import './stylesheet/DeleteNote_popup.css';
import close_icon from '../assets/images/black_cross_icon.svg';

const DeleteNote_popup = ({onClose}) => {
  return (
    <div className='deletepopup-main'>
      <div className="deletepopup-container">

        <div className="deletepopup-content">
          <p>Are you sure you want to delete this task</p>
          <div className='deletePopup-btn-div'>    
            <button className='cancel-btn'>Close</button>
            <button className='confirm-btn'>Confirm</button>
          </div>
        </div>

        <button className='close-icon-btn' onClick={onClose}><img src={close_icon} alt="" /></button>
      </div>
    </div>
  )
}

export default DeleteNote_popup