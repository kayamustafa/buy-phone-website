import React, { Component } from 'react'
import Menu from './svg/bars-solid.svg' //Küçük ekranlar için kullanılacak menü ikonu
import Close from './svg/times-solid.svg' //Menüyü kapatma ikonu
import CartIcon from './svg/shopping-cart-solid.svg' //Sepet ikonu
import { Link } from 'react-router-dom'
import './css/Header.css'
import { DataContext } from './Context'


export var productType = 0;

export class Header extends Component {


    static contextType = DataContext;

    state = { //Menüyü açıp kapatmak için kullanılıyor
        toggle: false
    }

    menuToggle = () => { //Menü açıksa kapalı duruma kapalıysa açık duruma getiriyor
        this.setState({ toggle: !this.state.toggle })
    }



    render() {

        function changeProductType(type) { //ekrana hangi kategori ürünlerin renderlanacağını belirlemek için
            productType = type;
        }
        //productType = 0, en çok satan telefonlar
        //productType = 1, Android telefonlar
        //productType = 2, IOS telefonlar
        //productType = 3, Tüm telefonlar

        const { toggle } = this.state;
        const { cart } = this.context;
        return (
            <header>
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="" width="20" />
                </div>
                <div className="logo">
                    <h1><Link to="/" onClick={() => changeProductType(0)}>Logo</Link></h1> {/*productType, 0'a eşitleniyor yani en çok satan telefonlar renderlanacak*/}
                </div>
                <nav>
                    <ul className={toggle ? "toggle" : ""} onClick={this.menuToggle}>
                        <li><Link to="/" onClick={() => changeProductType(0)}>Home</Link></li>
                        <li className='product'><Link to="/product" onClick={() => changeProductType(3)}>Product</Link>
                            <ul className='productalt'>
                                <li><Link to="/product" onClick={() => changeProductType(2)}>IOS</Link></li>
                                <li><Link to="/product" onClick={() => changeProductType(1)}>Android</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>

                        <li className="close" onClick={this.menuToggle}>
                            <img src={Close} alt="" width="20" />
                        </li>
                    </ul>
                    <div className="nav-cart">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                            <img src={CartIcon} alt="" width="20" />
                        </Link>
                    </div>
                </nav >
            </header >
        )
    }
}

export default Header
