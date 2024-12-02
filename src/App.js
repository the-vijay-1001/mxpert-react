import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import { Route, Routes } from 'react-router-dom';
import Product from './pages/product';
import { useEffect, useState } from 'react';
import ProductList from './pages/productList';
import ProductUpdate from './pages/productUpdate';
import ProductPage from './pages/productCardPage';

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const isToken = localStorage.getItem("token")
    if (isToken)
      setToken(isToken)
  })
  return <>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/product-create' element={token ? <Product /> : <Login />} />
      <Route path='/product-update' element={token ? <ProductUpdate /> : <Login />} />
      <Route path='/product-card' element={token ? <ProductPage /> : <Login />} />
      <Route path='/product' element={token ? <ProductList /> : <Login />} />
    </Routes>
  </>
}

export default App;
