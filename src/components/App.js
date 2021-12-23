import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { uuid } from 'uuidv4';
import './App.css';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import Header from './Header';

function App() {
  const LOCAL_STORAGE_KEY = "products";
  const [products, setproducts] = useState([]);

  const AddProductHandler = (product) => {
    console.log(product);
    setproducts([...products, {id: uuid(), ...product }]);
  }

  const removeproductHandler = (id) => {
    const newProductList = products.filter((product) => {
      return product.id !== id;
    });

    setproducts(newProductList);
  }

  useEffect(() => {
    const retriveproducts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveproducts) setproducts(retriveproducts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  return (
    <div className='container'>
      <Header/>
        <Routes>
          
            <Route path="/add" exact element={<AddProduct AddProductHandler={AddProductHandler}/>}></Route>

            <Route path="/" exact element={<ProductList products={products} getproductId={ removeproductHandler }/>}></Route>
          {/* <AddProduct AddProductHandler={AddProductHandler}/>
          <ProductList products={products} getproductId={ removeproductHandler }/> */}
        </Routes>
      
      
    </div>
  );
}

export default App;
