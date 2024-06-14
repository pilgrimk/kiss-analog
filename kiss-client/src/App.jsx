import { useState } from 'react'
import { BrowserRouter as Router,
         Routes,
         Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { Home, About, Blogs, Reviews, ViewPost } from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />}  />
          <Route path='/about' element={<About />}  />
          <Route path='/blogs' element={<Blogs />}  />
          <Route path='/reviews' element={<Reviews />}  />
          <Route path='/post/:id' element={<ViewPost />}  />
          <Route path='/*' element={<Home />}  />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
