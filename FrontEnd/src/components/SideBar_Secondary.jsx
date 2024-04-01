import React, { useState } from 'react'
import SideBar_Main from './SideBar_Main'
import black_add_icon from '../assets/images/black_add_icon.svg'
import './stylesheet/SideBar_Secondary.css'
import search_icon from  '../assets/images/search_icon.svg'
import filter_icon from '../assets/images/filter_icon.svg'
import NewNote_popup from './NewNote_popup'
import { useNavigate } from 'react-router-dom';
import { useContextProvider } from '../Contexts/ context'
import black_lock_icon from '../assets/images/black_lock_icon.svg';


const SideBar_Secondary = ({folder}) => {
  const selectedFolder = folder || { folder_name: "All Tasks", content: [], id: 1 };
  // console.log(folder.name, 'folder_clicked');
  console.log(selectedFolder, 'selected_folderInSec_sidebar');
  console.log(selectedFolder.folder_name, 'foldername___');
  
  const {openNotePopup,notePopUpOpen,closeNotePopup} = useContextProvider();
  const [filterbtn, setFilterBtn] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const navigate =  useNavigate();

  

  const handleClick = (taskFolder, taskName) => {
    navigate(`/${taskFolder}/${taskName}`);
  };

  const toggleFilterButton = () => {
    setFilterBtn(!filterbtn)
  }


  const searchPlaceholder = `Search ${selectedFolder.folder_name}`

  return (
     <div className='sideBar-sec-container'>
      <div className="sec-SideBar">

        <div className="bar-title-div">
          <p className='bar-title-text'>{selectedFolder.folder_name}</p>
          <div className='black-add-icon-btn'>
            <button onClick={openNotePopup}><img className='black-icon-img' src={black_add_icon} alt="" /></button>
          </div>
        </div>

        <div className="filter-div">
          <div className='search-div'>
             <input type="text" name="" id="" placeholder={searchPlaceholder} />
            <button className='search-btn'><img src={search_icon} alt="" /></button>
          </div>
          <div className="filter-icon-div">
            <button onClick={toggleFilterButton}><img src={filter_icon} alt="" /></button>
          </div>

        {filterbtn? (
          <div className='filter-btn-clicked'>
              <p>Filter By</p>
              <button className='btn-filter-text'>Date</button>
              <button className='btn-filter-text'>Name</button>
          </div>
        ): null}
        </div>
        
        <div className='task-title-container'>
        
        {"" || selectedFolder.content.map((item, index) => {
          console.log(item.locked, 'item mapped');
          return item.locked? (
            <div key={item.id} onClick={() => handleClick(folder.folder_name, item.title)} className="tasks-title-div">
              <div className="name_and_lock_icon_div">
                <p className='task-title-text'>{item.title}</p>
                <img src={black_lock_icon} alt="" className="lock-note-icon" />
              </div>
              <p className='task-date'>{item.date}</p>
            </div>
          ) : (
            <div key={item.id} onClick={() => handleClick(folder.folder_name, item.title)} className="tasks-title-div">
              <p className='task-title-text'>{item.title}</p>
              <p className='task-date'>{item.date}</p>
            </div>
          );
          
          })}
        </div>
      </div>
      <div>{notePopUpOpen && <NewNote_popup onClose={closeNotePopup} selectedFolder={selectedFolder.folder_name}/>}</div>

      
     </div>
   
  )
}

export default SideBar_Secondary