import React from 'react';
import './Header.css';
import img_src_value from '../img/circuit.jpg';

export default function Header(prop) {
  return (
  <div className="header">
      <div className="header-title">
        <span className="header-title-lg">{prop.title}</span>
      </div>
      <img className="header-img" src={img_src_value} alt=""></img>
  </div>
  );
}
