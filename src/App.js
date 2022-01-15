import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer';
import { NavBar } from './NavBar';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting={'LISTA ITEMS'} />} />
        <Route exact path="/category/:categoryId" element={<ItemListContainer greeting={'LISTA ITEMS'} />} />
        <Route exact path="/product/:itemId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
