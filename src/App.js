import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from 'react';
import 'antd/dist/antd.min.css';

import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProdoctCollectionPage from './pages/ProdoctCollectionPage';
import ProdoctPage from './pages/ProdoctPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/mail' />} />
        <Route path='/mail' element={<HomePage />} exact />

        <Route path='/cart' element={<CartPage />} exact />
        <Route path='/checkout' element={<CheckoutPage />} exact />

        <Route path='/mail/:categoryName' element={<ProdoctCollectionPage />} />
        <Route path='/:prodoctName' element={<ProdoctPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
