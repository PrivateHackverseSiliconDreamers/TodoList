import save_icon from "../assets/images/save_icon.svg";
import bin_icon from "../assets/images/bin_icon.svg";
import share_icon from "../assets/images/share_icon.svg";
import green_lock_icon from "../assets/images/green_lock_icon.svg";
import ReactQuill from "react-quill";
import { useParams } from "react-router-dom";
import DeleteNote_popup from "../components/DeleteNote_popup";
import { useState, useEffect } from "react";
import "./stylesheet/TaskPage.css";
import { useContextProvider } from "../Contexts/ context";

const TaskPage = () => {
  const { taskFolder, taskName, taskId } = useParams();
  const {
    isDeletePopUpOpen,
    openDeletePopUp,
    closeDeletePopUp,
    setTree,
    tree,
    isLockNotePopUpOpen,
    closeLockedNotePopUp,
    openLockedNotePopUp,
  } = useContextProvider();
  console.log(tree);
  const text =
    tree.length > 0
      ? tree
          .find((folder) => folder.folder_name === taskFolder)
          .content.find((task) => task.title === taskName).text
      : "";
  console.log(text);
  const [textValue, setTextValue] = useState(text);
  useEffect(() => {
    setTextValue(text);
  }, [text]);

  const handleSave = () => {
    const newTree = tree;
    const folder = tree.find((folder) => folder.name === taskFolder);
    const folderIndex = tree.findIndex((folder) => folder.name === taskFolder);
    const taskIndex = folder.content.findIndex(
      (task) => task.title === taskName
    );
    console.log("index", folderIndex, " taskIndex ", taskIndex);
    if (folderIndex !== -1 && taskIndex !== -1) {
      newTree[folderIndex].content[taskIndex].text = textValue;
    }
    setTree(newTree);
    console.log(tree);
  };

  const handleDelete = () => {
    const newTree = tree.filter((folder) => folder.name !== taskFolder);
    setTree(newTree);
    console.log(tree);
  };

  return (
    <>
      <div>
        {isDeletePopUpOpen && <DeleteNote_popup onClose={closeDeletePopUp} />}
        {isLockNotePopUpOpen && (
          <LockedNote_popup onClose={closeLockedNotePopUp} />
        )}
      </div>

      <div className="task-page-container">
        <div className="text-area-container">
          <div className="body-container">
            <div className="text-icons-container">
              <div className="delete-icon-div">
                <button
                  onClick={openDeletePopUp}
                  className="icon-btn-delete-home"
                >
                  <img src={bin_icon} className="delete-icon" alt="" />
                </button>
              </div>

              <div className="group-icons-div">
                <button className="icon-btn-home" onClick={handleSave}>
                  <img src={save_icon} alt="" className="save-icon" />
                </button>
                <button onClick={openLockedNotePopUp} className="icon-btn-home">
                  <img
                    src={green_lock_icon}
                    alt=""
                    className="text-lock-icon"
                  />
                </button>

                <button className="icon-btn-home">
                  <img src={share_icon} alt="" className="share-icon" />
                </button>
              </div>
            </div>

            <div className="text-editor-container">
              {/* <div className="edit-text-div">
          <button className="edit-text-editor-btn">Edit</button>
        </div>
         */}
              <div>
                {/* met le text editor ici */}
                <ReactQuill
                  className="reactquill-text"
                  theme="snow"
                  value={textValue}
                  onChange={setTextValue}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskPage;
