import './App.css';
import React, { useState } from 'react';
import Header from '../common/Header';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import List from '../common/List';
import Deatil from '../routes/Detail';
import data from '../common/data';

function App() {
  const [shoes, setShoes] = useState(data);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<List shoes={shoes} setShoes={setShoes} />} />
        <Route path='/detail/:id' element={<Deatil shoes={shoes} />} />
        <Route path="*" element={<div>없는페이지</div>} />
      </Routes>
    </>
  );
}

export default App;
