import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../context/Context';
import './Write.css';
import img_src_value from '../img/default_blog_pic.jpg'

export default function Write() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPost = {
            username: user.username,
            title,
            desc,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;

            try {
                await axios.post(`${process.env.REACT_APP_API_URL}/api/files/upload`, data);
            }
            catch (err) { console.log(err) };
        };
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/posts`, newPost);
            navigate("/post/" + res.data._id);
        }
        catch (err) { console.log(err)};
    };

    return (
        <div className="write">
            {file? (
                <img
                    className="write-img"
                    src={URL.createObjectURL(file)}
                    alt=""
                >
                </img>
            ) : (
                <img
                className="write-img"
                src={img_src_value}
                alt=""
            >
            </img>  
            )}
            <form className="write-form" onSubmit={handleSubmit}>
                <div className="write-form-group">
                    <label htmlFor='fileInput'>
                        <i className="write-icon fas fa-plus"></i>
                    </label>
                    <input 
                    type="file" 
                    id="fileInput" 
                    style={{ display: "none" }} 
                    onChange={(e)=>setFile(e.target.files[0])} />
                    <input 
                    type="text" 
                    placeholder="Title" 
                    className="write-input" 
                    autoFocus={true}
                    onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div className="write-form-group">
                    <textarea
                        placeholder="Tell your story..."
                        type="text"
                        className="write-input write-text"
                        onChange={(e)=>setDesc(e.target.value)}
                    >
                    </textarea>
                </div>
                <button className="write-submit" type="submit">Publish</button>
            </form>
        </div>
    );
}
