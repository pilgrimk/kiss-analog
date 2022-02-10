import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
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

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = localStorage.getItem("user");
    u && JSON.parse(u) ? setUser(true) : setUser(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  return (
    <Router>
      <Head />
      <Navbar />

      <div className="content-container">
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/circuit-design' element={<CircuitDesign />} />
          <Route path='/blog' element={<Blogs />} />

          {user && (
            <>
              <Route path='/login' element={<Login authenticate={() => setUser(true)} />} />
              <Route path='/register' element={<Register />} />
            </>
          )}
          {user && (
            <>
              <Route path='/write' element={<Write />} />
              <Route path='/post/:postId' element={<Single />} />
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
