import React, { Component } from 'react'
import { DataContext } from '../Context'
import { Link } from 'react-router-dom'
import Colors from './Colors'
import '../css/Details.css'


export class Details extends Component {
    static contextType = DataContext;

    state = {
        product: [] //Seçilen ürünün bilgileri buraya atılacak
    }

    getProduct = () => {
        if (this.props.match.params.id) {
            const all = this.context.allproducts; //tüm ürünler
            const data = all.filter(item => { //tüm ürünler arasından tıklanan ürünün id'siyle bilgiler çekiliyor
                return item._id === this.props.match.params.id
            })
            this.setState({ product: data }) //Ürün bilgileri product sözlüğüne atılıyor
        }
    };

    componentDidMount() { //Bu component her çağrıldığında önce ürün bilgisi çekiliyor
        this.getProduct();
    }




    render() {

        const { product } = this.state;
        const { addCart } = this.context;
        return (
            <>
                {
                    product.map(item => (
                        <div className="details" key={item._id}>
                            <img src={item.src} alt="" />
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>₺{item.price}</span>
                                </div>
                                <Colors colors={item.colors} />
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                                    Add to cart
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Details
