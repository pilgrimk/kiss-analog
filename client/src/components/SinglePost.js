import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../context/Context';
import axios from 'axios';
import './SinglePost.css';
import img_src_value from '../img/pexels-pixabay-414860.jpg';

export default function SinglePost() {
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const PF = `${process.env.REACT_APP_API_URL}/images/`;
  const { user } = useContext(Context);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts/` + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    }
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/posts/` + path, { data: { username: user.username } });
      navigate("/blogs");
    }
    catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/api/posts/` + path,
        {
          username: user.username,
          title: title,
          desc: desc,
        }
      );
      setUpdateMode(false);
    }
    catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        {post.photo ? (
          <img className="single-post-img" src={PF + post.photo} alt=""></img>
        ) : (
          <img className="single-post-img" src={img_src_value} alt=""></img>
        )}{
          updateMode ? <input
            type="text"
            value={title}
            className="single-post-title-input"
            autoFocus
            onChange={(e) => setTitle(e.target.value)} /> : (

            <h1 className="single-post-title">
              {title}
              {post.username === user?.username && (
                <div className="single-post-edit">
                  <i className="single-post-icon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                  <i className="single-post-icon far fa-trash-alt" onClick={handleDelete}></i>
                </div>
              )}
            </h1>
          )
        }
      </div>
      <div className="single-post-info">
        <span className="single-post-author">
          Author:
          <Link to={`/blog/?user=${post.username}`} className="link">
            <b>{post.username}</b>
          </Link>
        </span>
        <span className="single-post-date">{new Date(post.createdAt).toDateString()}</span>
      </div>
      {updateMode ? (<textarea
        className="single-post-desc-input"
        value={desc}
        onChange={(e) => setDesc(e.target.value)} />
      ) : (
        <p className="single-post-desc">
          {desc}
        </p>
      )}
      {updateMode && (
        <button
          className="single-post-button"
          onClick={handleUpdate}>Update</button>
      )}
    </div>
  );
}
