import React, { useState } from "react";
import "./stylesheet/LockedNotes_popup.css";
import close_icon from "../assets/images/black_cross_icon.svg";
import { useContextProvider } from "../Contexts/ context";
import { createPasswordAPI } from "../APIs/api";
import axios from "axios";

const LockedNote_popup = ({ onClose, taskName }) => {
  const [taskPassword, setTaskPassword] = useState("");
  const { setReload } = useContextProvider();
  const handleCreatePassword = async () => {
    try {
      const response = await axios.post(createPasswordAPI, {
        title: taskName,
        password: taskPassword,
      });
      if (response.status == 200) {
        setReload(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="lockpopup-main">
      <div className="lockpopup-container">
        <div className="lockpopup-content">
          <p>Enter the password</p>
          <input
            type="text"
            name=""
            value={taskPassword}
            onChange={(e) => setTaskPassword(e.target.value)}
            id=""
          />
          <div className="lockPopup-btn-div">
            <button
              onClick={() => {
                handleCreatePassword();
                onClose();
              }}
            >
              Enter
            </button>
          </div>
        </div>

        <button className="close-icon-btn" onClick={onClose}>
          <img src={close_icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default LockedNote_popup;
