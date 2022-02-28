import React, { useContext, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Context } from '../context/Context';
import './Settings.css';
import axios from 'axios';

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const { user, dispatch } = useContext(Context);
  const PF = `${process.env.REACT_APP_API_URL}/images/`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: "UPDATE_START"});

    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;

      try {
        await axios.post(`${process.env.REACT_APP_API_URL}/api/files/upload`, data);
      }
      catch (err) {};
    };
    try {
      const res = await axios.put(`${process.env.REACT_APP_API_URL}/api/users/` + user._id, updatedUser);
      setSuccess(true);
      dispatch({type: "UPDATE_SUCCESS", payload: res.data});
    }
    catch (err) { 
      setSuccess(false);
      dispatch({type: "UPDATE_FAILURE"});
    };
  };

  return (
    <div className="settings">
      <div className="settings-wrapper">
        <div className="settings-title">
          <span className="settings-update-title">Update your account</span>
          <span className="settings-delete-title">Delete your account</span>
        </div>
        <form className="settings-form" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settings-PP">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic }
              alt=""
            />
            <label htmlFor='fileInput'>
              <i className="settings-PP-icon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}></input>
          </div>
          <label>UserName</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)} />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)} />
          <label>Password</label>
          <input type="password"
            onChange={(e) => setPassword(e.target.value)} />
          <button className="settings-submit" type="submit">Update</button>
          {success && <span className="success-msg">Profile has been updated...</span>}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}