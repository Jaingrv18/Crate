import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import ProductDescription from './Pages/ProductDescription'
import Home from './Pages/Home'
import UserContext from './Context/UserContext';
import SearchContext from './Context/SearchContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  const [category, setCategory] = useState('categories');
  const [search, setSearch] = useState("");
  return (
    <div>
      <Router>
        <Navbar />
        <UserContext.Provider value={[category, setCategory]}>
          <SearchContext.Provider value={[search, setSearch]}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product-description' element={<ProductDescription />} />
            </Routes>
          </SearchContext.Provider>
        </UserContext.Provider>
      </Router>
    </div>
  )
}

export default App

