import React from 'react';
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
            <table className="table">
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