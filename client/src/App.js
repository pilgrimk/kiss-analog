import React , { useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from './components/Head';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CircuitDesign from './pages/CircuitDesign';
import Blogs from './pages/Blogs';
import Single from './pages/Single';
import Write from './pages/Write';
import Settings from './pages/Settings';
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound';
import { Context } from './context/Context';

function App() {
  const { user } = useContext(Context);

  return (
    <Router>
      <Head />
      <Navbar />

      <div className="content-container">
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/circuit-design' element={<CircuitDesign />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/post/:postId' element={<Single />} />
          <Route path='/login' element={<Login />} />

          {!user && (
            <>
              <Route path='/register' element={<Register />} />
            </>
          )}
          {user && (
            <>
              <Route path='/write' element={<Write />} />
              <Route path='/settings' element={<Settings />} />
            </>
          )}

          <Route path='/:pageName' element={<NotFound />} />
        </Routes>
      </div>

    </ Router>
  );
}

export default App;
