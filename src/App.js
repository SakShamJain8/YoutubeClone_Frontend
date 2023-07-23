import './App.css';
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import SearchPage from './SearchPage'
import Header2 from './Header2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element = {
            <div className='app__page'>
              <Sidebar />
              <div className = 'app__header'>
                <Header2 />
                <RecommendedVideos />
              </div>
            </div> 
          } />
          <Route path = "/search/:searchTerm" element = {
            <div className='app__page'>
              <Sidebar />
              <SearchPage />
            </div>
          } />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;