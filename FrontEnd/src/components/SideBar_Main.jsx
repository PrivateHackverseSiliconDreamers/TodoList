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

  // const [isFolderPopUpOpen, setIsFolderPopupOpen] = useState(false);

  // const openFolderPopup = () => {
  //     setIsFolderPopupOpen(true)
  // }
  // const closeFolderPopup = () => {
  //     setIsFolderPopupOpen(false)
  // }
  /* 
    const menuItems = [
        {
        name: 'All Tasks',
        path: '/',
        id: 1,
        },
        {
        name: 'Completed',
        path: '/',
        id: 2,
        },
    ]; */
  const data = [
    {
      folder_name: 'personnel',
      id: 1,
      content: [
        {
          title: 'pour demain',
          folder_name: 'personnel',
          id: 1,
          text: 'faire X, faire Y, faire Z',
          date: '29-01-2015',
          completed: false,
          locked: false,
          password: '0000',
        },
        {
          title: "pour aujourd'hui",
          folder_name: 'personnel',
          id: 4,
          text: 'faire A, faire B, faire C',
          date: '29-01-2015',
          completed: false,
          locked: false,
          password: '0000',
        },
      ],
    },

    {
      folder_name: 'public',
      id: 2,
      content: [
        {
          title: 'pour le groupe',
          id: 1,
          folder_name: 'public',
          text: 'faire ceci, faire cela, faire ceci cela',
          date: '29-01-2015',
          completed: false,
          locked: false,
          password: '0000',
        },
        {
          title: 'pour SMA',
          folder_name: 'public',
          id: 2,
          text: 'faire 1, faire 2, faire 3',
          date: '29-01-2015',
          completed: false,
          locked: true,
          password: '4568',
        },
      ],
    },
    {
      folder_name: 'private',
      id: 3,
      content: [
        {
          title: 'liste des cadeaux',
          folder_name: 'private',
          id: 1,
          text: 'acheter ceci cela',
          date: '29-01-2015',
          completed: false,
          locked: true,
          password: '0000',
        },
        {
          title: 'confidentiel',
          folder_name: 'private',
          id: 2,
          text: 'ne rien afficher',
          date: '29-01-2015',
          completed: false,
          locked: true,
          password: '0000',
        },
      ],
    },
  ];
  //const data = [];
  useEffect(() => {
    setTree(data);
  }, []);
  console.log(tree);
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
            {tree.map((item) => (
              <li
                key={item.id}
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

      <div>{notePopUpOpen && <NewNote_popup onClose={closeNotePopup} />}</div>

      <div style={{ paddingLeft: "" }}>
        {console.log(filteredItem)}
        <SideBar_Secondary folder={filteredItem[0] || tree[0]} />
      </div>
    </div>
  );
};

export default SideBar_Main;
