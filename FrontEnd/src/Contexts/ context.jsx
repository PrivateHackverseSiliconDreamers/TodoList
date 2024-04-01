import React, { createContext } from "react";
import { useState, useContext } from "react";

export const context = createContext(null);

export default function ContextProvider({ children }) {
  const [isFolderPopUpOpen, setIsFolderPopupOpen] = useState(false);
  const [notePopUpOpen, setNotePopUpOpen] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [noteName, setNoteName] = useState("");
  const [isDeletePopUpOpen, setIsDeletePopUpOpen] = useState(false);
  const [isLockNotePopUpOpen, setIsLockNotePopUpOpen] = useState(false);
  const [taskPassword, setTaskPassword] = useState("");
  const [tree, setTree] = useState([]);

  const openLockedNotePopUp = () => {
    setIsLockNotePopUpOpen(true);
  };
  const closeLockedNotePopUp = () => {
    setIsLockNotePopUpOpen(false);
  };

  const openDeletePopUp = () => {
    setIsDeletePopUpOpen(true);
  };
  const closeDeletePopUp = () => {
    setIsDeletePopUpOpen(false);
  };
  const openFolderPopup = () => {
    setIsFolderPopupOpen(true);
  };

  const closeFolderPopup = () => {
    setIsFolderPopupOpen(false);
  };
  const openNotePopup = () => {
    setNotePopUpOpen(true);
  };

  const closeNotePopup = () => {
    setNotePopUpOpen(false);
  };
  const contextValue = {
    isFolderPopUpOpen,
    notePopUpOpen,
    folderName,
    isLockNotePopUpOpen,
    setFolderName,
    openLockedNotePopUp,
    closeLockedNotePopUp,
    setIsLockNotePopUpOpen,
    noteName,
    isDeletePopUpOpen,
    setIsDeletePopUpOpen,
    openDeletePopUp,
    closeDeletePopUp,
    setNoteName,
    setNotePopUpOpen,
    openFolderPopup,
    closeFolderPopup,
    openNotePopup,
    closeNotePopup,
    taskPassword,
    setTaskPassword,
    tree,
    setTree,
  };

  return <context.Provider value={contextValue}>{children}</context.Provider>;
}

export const useContextProvider = () => {
  return useContext(context);
};
