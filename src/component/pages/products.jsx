import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../services/fake-products';
import "../style/products.css";
export default class Products extends Component {
    state = {
        products: getProducts(),
    };
    

    render() {
        const {products} = this.state;
        return (
            <div className = "cards__wrapper mt-5">
                {products.map(({id,name,img,description }) => (
                    <div className = "card"key = {id}>
                        <img  classname ="card-img-top" src={img} alt=""/>
                        <div className = "card-body">
                            <h5 className = "card-title">{name}</h5>
                            <p className = "card-text">{description}</p>
                            <Link to={`/products/${id}`} className="btn btn-primary">Show product</Link>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
