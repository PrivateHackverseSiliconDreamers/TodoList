import React, { createContext, useEffect } from "react";
import { useState, useContext } from "react";
import { getAllFoldersAPI, getAllTasksAPI } from "../APIs/api";
import axios from "axios";
import { parseIt } from "./parser";

export const context = createContext(null);

export default function ContextProvider({ children }) {
  const [isFolderPopUpOpen, setIsFolderPopupOpen] = useState(false);
  const [notePopUpOpen, setNotePopUpOpen] = useState(false);
  const [isDeletePopUpOpen, setIsDeletePopUpOpen] = useState(false);
  const [isLockNotePopUpOpen, setIsLockNotePopUpOpen] = useState(false);
  const [tree, setTree] = useState([]);
  const [reload, setReload] = useState(false);

  const getAllFolders = async () => {
    console.log("hello axios");
    try {
      const response = await axios.get(getAllFoldersAPI);
      let folders = [];
      console.log("Response axios", response);
      if (response.status == 200) {
        folders = response.data.folders;
        console.log("Folders: ", folders, "   ", typeof folders);
        return folders;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getAlltasks = async () => {
    try {
      const response = await axios.get(getAllTasksAPI);
      let tasks = [];
      if (response.status == 200) {
        tasks = response.data.taks;
        console.log("tasks ", tasks);
        return tasks;
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const folders = getAllFolders();
        const tasks = getAlltasks();
        const data = parseIt(folders, tasks);
        setTree(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    console.log("tree :  ####",tree);
  }, [reload]);
  console.log("tree2",tree);

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
    isLockNotePopUpOpen,
    openLockedNotePopUp,
    closeLockedNotePopUp,
    setIsLockNotePopUpOpen,
    isDeletePopUpOpen,
    setIsDeletePopUpOpen,
    openDeletePopUp,
    closeDeletePopUp,
    setNotePopUpOpen,
    openFolderPopup,
    closeFolderPopup,
    openNotePopup,
    closeNotePopup,
    tree,
    setTree,
    reload,
    setReload,
  };

  return <context.Provider value={contextValue}>{children}</context.Provider>;
}

export const useContextProvider = () => {
  return useContext(context);
};
