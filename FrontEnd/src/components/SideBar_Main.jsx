import React, { useEffect, useState } from "react";
import "./stylesheet/SideBar_Main.css";
import logo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import folder_icon from "../assets/images/folder_icon.svg";
import add_icon_green from "../assets/images/green_add_icon.svg";
import SideBar_Secondary from "./SideBar_Secondary";
import NewFolder_popup from "./NewFolder_popup";
import NewNote_popup from "./NewNote_popup";
import { useContextProvider } from "../Contexts/ context";

const SideBar_Main = ({ children }) => {
  const {
    isFolderPopUpOpen,
    notePopUpOpen,
    openFolderPopup,
    closeFolderPopup,
    openNotePopup,
    closeNotePopup,
    tree,
    setTree,
  } = useContextProvider();
  console.log(tree, "logged tree");
  const [keyClicked, setKeyClicked] = useState(null);
  const filteredItem = tree.filter((item) => item.id === keyClicked);
  console.log(filteredItem, "filteredItem");

  return (
    <div className="Sb-main-container">
      <div className="main-sidebar">
        <div className="app-name">
          <div className="logo-div">
            <img src={logo} className="logo" alt="" />
          </div>
          <p className="app-text">ilicon Tasks</p>
        </div>
        <div className="mainSB-navigation">
          <ul className="mainSideBar-ul">
            {tree.map((item,index) => (
              <li
                key={index}
                onClick={() => setKeyClicked(item.id)}
                className="main-menuItems"
              >
                <div className="folder-div">
                  <img src={folder_icon} className="folder_icon" alt="" />
                </div>
                <NavLink className="mainSB-navlink">{item.folder_name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <NavLink onClick={openFolderPopup} className="new-folder">
          <div className="add-icon-green">
            <button>
              <img className="add-green-icon-img" src={add_icon_green} alt="" />
            </button>
          </div>
          <p href="" className="new-folder-text">
            New Folder
          </p>
        </NavLink>
      </div>

      <div>
        {isFolderPopUpOpen && <NewFolder_popup onClose={closeFolderPopup} />}
      </div>
      
      <div style={{ paddingLeft: "" }}>
        <SideBar_Secondary folder={filteredItem[0] || tree[0]} />
      </div>
    </div>
  );
};

export default SideBar_Main;
