import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import SideBar_Main from '../components/SideBar_Main';
import './stylesheet/HomePage.css';
import { Outlet } from 'react-router';



const HomePage = () => {


  return (
    <div className="todoApp-container">
      <SideBar_Main />
      <Outlet />  
    </div>
  );
};

export default HomePage;
