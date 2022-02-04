import React from 'react';
import './Sidebar.css';
import img_src_value from '../img/pexels-mikhail-nilov-9242271.jpg';


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <span className="sidebar-title">ABOUT ME</span>
                <img
                    className="sidebar-img"
                    src={img_src_value}
                    alt=""
                />
                <p>
                    Provident odio iusto rerum accusantium aliquam dolorum vero harum quas, quae dolor quibusdam officiis, esse
                    quod adipisci repellendus vel, neque ipsa nam nostrum voluptates perferendis doloribus aperiam voluptatibus.
                    Vero dolorum atque sapiente
                </p>
            </div>
            <div className="sidebar-item">
            <span className="sidebar-title">CATEGORIES</span>
            <ul className="sidebar-list">
                <li className="sidebar-list-item">Life</li>
                <li className="sidebar-list-item">Music</li>
                <li className="sidebar-list-item">Style</li>
                <li className="sidebar-list-item">Sport</li>
                <li className="sidebar-list-item">Entertainment</li>
                <li className="sidebar-list-item">Politics</li>
            </ul>
            </div>
        </div>
    );
}
