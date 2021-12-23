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
            <table className="table mt-3">
                <thead className="thead-primary">
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Prix</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>{renderProductList}</tbody>
            </table>
        </div>
    );
};

export default ProductList