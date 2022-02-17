import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Sidebar.css';
import img_src_value from '../img/pexels-mikhail-nilov-9242271.jpg';


export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCats(res.data);
        };
        getCats();
    }, [])

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
                    {cats.map((c) => (
                        <Link to={`/blog/?category=${c.name}`} className="link">
                            <li className="sidebar-list-item" key={c._id} >{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}
