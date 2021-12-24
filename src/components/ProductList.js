import React from 'react';
import {  Link, Outlet } from "react-router-dom";
import ProductCard from './ProductCart';

const ProductList = (props) => {
    const deleteProductHandler = (id) => {
        props.getproductId(id);
    };

    const renderProductList = props.products.map((product) => {
        return (        
            <ProductCard product={product} clickHander={deleteProductHandler} key={product.id}/>
        );
    })

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                <h2>Produit List</h2>
                </div>
                <div className="col">
                <Link to="/add"><button className="btn btn-primary">Add Produit</button></Link>
                <Outlet />
                </div>
            </div>
            <div class="row pb-5 mb-4">
                <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  {renderProductList}
                </div>
            </div>

        </div>
    );
};

export default ProductList