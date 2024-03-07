// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Product from './components/Product';
import Cart from './components/Cart';
import products from './products.json';
import { ProductProvider } from './context/ProductContext';
import Error from './components/Error';

function App() {
  console.log(products);
  return (
    <ProductProvider products={products}>
      <Router>
        <div className="App">
          <div className="header">
            <div className="navigation">
              <div className="logo">Sushi House</div>
              <Link to= "/cart">View Cart</Link>
              <Link to= "/">Home</Link>
            </div>
            <img
              src="images/bg.jpg"
              alt="Sushi House"
              title="Sushi House"
            />
            <div className="description">
              <h1>Welcome to our sushi house</h1>
              <p>
                Welcome to Zen Sushi Bar, where every bite is a journey into the delicate art of
                Japanese culinary perfection.
              </p>
            </div>
          </div>

          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<div className="main"><Product /></div>} />
            <Route path="*" element={<Error />} />
          </Routes>

          <div className="footer">all rights reserved</div>
        </div>
      </Router>
    </ProductProvider>
  );
}

export default App;
