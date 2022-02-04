import React from 'react';
import Sidebar from '../components/Sidebar';
import './Settings.css';
import img_src_value from '../img/pexels-pixabay-355948.jpg';

export default function Settings() {
  return (
    <div className="settings">
      <div className="settings-wrapper">
        <div className="settings-title">
          <span className="settings-update-title">Update your account</span>
          <span className="settings-delete-title">Delete your account</span>
        </div>
        <form className="settings-form">
          <label>Profile Picture</label>
          <div className="settings-PP">
            <img
              src={img_src_value}
              alt=""
            />
            <label htmlFor='fileInput'>
              <i className="settings-PP-icon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }}></input>
          </div>
          <label>UserName</label>
          <input type="text" placeholder="KevinP" />
          <label>Email</label>
          <input type="email" placeholder="pilgrimka1@yahoo.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settings-submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
