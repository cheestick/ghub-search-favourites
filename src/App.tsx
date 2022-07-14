import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavouritesPage from './pages/FavouritesPage';
import Navigation from './components/Navigation';



function App() {
  return (
    <>
      <Navigation/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/favourites' element={<FavouritesPage />} />
      <Route path="*" element={<Navigate to='/'/>} />
    </Routes>
    </>
    )
}

export default App;
