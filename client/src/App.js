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

function App() {
  return (
    <Router>
      <Head />
      <Navbar />

      <div className="content-container">
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/circuit-design' exact element={<CircuitDesign />} />
          <Route path='/blog' exact element={<Blogs />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/write' exact element={<Write />} />
          <Route path='/settings' exact element={<Settings />} />
          <Route path='/post/:postId' element={<Single />} />
          { /* <Route path='/register'> {user ? <Home/> : <Register />} </Route> */ }
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' exact element={<NotFound />} />
        </Routes>
      </div>

    </ Router>
  );
}

export default App;
