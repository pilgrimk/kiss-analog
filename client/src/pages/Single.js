import React from 'react';
import SinglePost from '../components/SinglePost';
import Sidebar from '../components/Sidebar';
import BottomCards from '../components/BottomCards';
import Footer from '../components/Footer';
import './Single.css';

export default function Single() {
  return (
    <div className='single'>
      <div className="single-wrapper">
        <SinglePost />
        <Sidebar />
      </div>

      <BottomCards />
      <Footer />
    </div>
  );
}
