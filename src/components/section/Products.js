import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context'
import '../css/Products.css'
import { productType } from '../Header'

export class Products extends Component {

    static contextType = DataContext;

    render() {

        var products;
        const { bestselling, allproducts, android, ios, addCart } = this.context;
        if (productType === 0) products = bestselling;
        else if (productType === 1) products = android;
        else if (productType === 2) products = ios;
        else products = allproducts; //Header component'ında seçilen kategoriye göre bu component'a productType bilgisi 
        //aktarılıyor. Ona göre ürünler renderlanıyor
        return (
            <div>
                <h2 className={productType ? 'hidden' : 'bestselling'}>Best-Selling Phones</h2>
                <div id="product">

                    {
                        products.map(product => (
                            <div className="card" key={product._id}>
                                <Link to={`/product/${product._id}`}>
                                    <img src={product.src} alt="" />
                                </Link>
                                <div className="content">
                                    <h3>
                                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                                    </h3>
                                    <span>₺{product.price}</span>
                                    <p>{product.description}</p>
                                    <button onClick={() => addCart(product._id)}>Add to cart</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Products
