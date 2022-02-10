import React from 'react';
import './Write.css';
import img_src_value from '../img/pexels-vanessa-loring-7869236.jpg'

export default function Write() {
    return (
        <div className="write">
            <img
                className="write-img"
                src={img_src_value}
                alt=""
            >
            </img>
            <form className="write-form">
                <div className="write-form-group">
                    <label htmlFor='fileInput'>
                        <i className="write-icon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                    <input type="text" placeholder="Title" className="write-input" autoFocus={true} />
                </div>
                <div className="write-form-group">
                    <textarea
                        placeholder="Tell your story..."
                        type="text"
                        className="write-input write-text"
                    >
                    </textarea>
                </div>
                <button className="write-submit">Publish</button>
            </form>
        </div>
    );
}
