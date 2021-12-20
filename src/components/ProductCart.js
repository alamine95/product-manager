import React from 'react';
const ProductCard = (props) => {
    const { id, nom, prix, description } = props.product;
    return (
        <tr>
            <td>{nom}</td>
            <td>{prix}</td>
            <td>{description}</td>
            <td><i className="trash alternate outline icon"
            style={{ color: "red", marginTop: "7px" }}
            onClick={() => props.clickHander(id)}
            ></i>
            </td>
        </tr>
    );
};

export default ProductCard