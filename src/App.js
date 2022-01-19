import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Head from './components/Head'
import Navbar from './components/Navbar'
import BottomCards from './components/BottomCards'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import CircuitDesign from './components/pages/CircuitDesign'
import EquipmentReview from './components/pages/EquipmentReview'
import NotFound from './components/pages/NotFound'

function App() {
  return (
    <Router>
      <Head />
      <Navbar />

      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/circuit-design' exact element={<CircuitDesign />} />
        <Route path='/equipment-review' exact element={<EquipmentReview />} />
        <Route path='*' exact element={<NotFound />} />
      </Routes>

      <BottomCards />
      <Footer />
    </ Router>
  );
}

export default App;
