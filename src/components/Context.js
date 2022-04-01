import React, { Component } from 'react'

export const DataContext = React.createContext();


export class DataProvider extends Component {

    state = { //Ekrana renderlanacak ürünlerin özelliklerinin bulunduğu sözlükler

        bestselling: [
            {
                "_id": "1",
                "title": "Xiaomi Redmi Note 10S",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/xiaomi/thumb/129611-3_large.jpg",
                "description": "Xiaomi Redmi Note 10S 128 GB",
                "content": "The Redmi Note 10S is yet another smartphone from Xiaomi in the crowded Redmi Note 10 series. This one is being launched in India amidst three other Redmi Note 10 models, including the Redmi Note 10, the Redmi Note 10 Pro, and the Redmi Note 10 Pro Max.",
                "price": 4000,
                "colors": ["white", "grey", "blue"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Samsung galaxy s21",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/117722-anaa_large.jpg",
                "description": "Samsung Galaxy S21 5g 128 GB",
                "content": "The Galaxy S21 FE is finally out, and it builds on the successful Galaxy S20 FE by combining the best traits of the Galaxy S21 phones and putting them into a phone that's more affordable and has a number of fan-favorite features.",
                "price": 11499,
                "colors": ["white", "grey", "pink", "violet"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "iphone 13 pro",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129911-7_large.jpg",
                "description": "iPhone 13 Pro 128 GB",
                "content": "The 'biggest camera update ever' on an iPhone doesn't have to come in a big iPhone, at least not a Max-sized one - the iPhone 13 Pro will do. Unlike last year, when only the 12 Pro Max got the ultimate camera system, the differences between the two Pro sizes now are simply in quantity, not in quality.",
                "price": 21499,
                "colors": ["silver", "red", "blue", "pink", "black"],
                "count": 1
            },
        ],

        allproducts: [
            {
                "_id": "1",
                "title": "Xiaomi Redmi Note 10S",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/xiaomi/thumb/129611-3_large.jpg",
                "description": "Xiaomi Redmi Note 10S 128 GB",
                "content": "The Redmi Note 10S is yet another smartphone from Xiaomi in the crowded Redmi Note 10 series. This one is being launched in India amidst three other Redmi Note 10 models, including the Redmi Note 10, the Redmi Note 10 Pro, and the Redmi Note 10 Pro Max.",
                "price": 4000,
                "colors": ["white", "grey", "blue"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Samsung galaxy s21",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/117722-anaa_large.jpg",
                "description": "Samsung Galaxy S21 5g 128 GB",
                "content": "The Galaxy S21 FE is finally out, and it builds on the successful Galaxy S20 FE by combining the best traits of the Galaxy S21 phones and putting them into a phone that's more affordable and has a number of fan-favorite features.",
                "price": 11499,
                "colors": ["white", "grey", "pink", "violet"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Huawei Nova 9",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/huawei/thumb/130803-4_large.jpg",
                "description": "Huawei Nova 9 128 GB",
                "content": "The Huawei nova series is intended for the younger generation with flashy looks and relatively low prices. The nova 9 family isn't far from the original formula. We got the vanilla nova 9 for this review, but the Pro model seems to be only slightly different - it has a bigger display, a smaller battery with faster charging and a secondary selfie camera. Sadly, only the standard nova 9 is making its way to the international market leaving the Pro to be a China-exclusive.",
                "price": 9999,
                "colors": ["lightblue", "black"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "iphone 13",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/bas-liks-10_large.jpg",
                "description": "iPhone 13 128 GB",
                "content": "One small reduction of the notch, one giant leap for the iPhone! That's the best description for the most minor iPhone upgrade yet - the Apple iPhone 13. But even if it won't make iPhone 12 owners line up for the new model, like it or not, the iPhone 13 is still one of the most powerful smartphones on the market and a bestseller in the making.",
                "price": 16299,
                "colors": ["silver", "red", "blue", "pink", "black"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "iphone 13 pro",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129911-7_large.jpg",
                "description": "iPhone 13 Pro 128 GB",
                "content": "The 'biggest camera update ever' on an iPhone doesn't have to come in a big iPhone, at least not a Max-sized one - the iPhone 13 Pro will do. Unlike last year, when only the 12 Pro Max got the ultimate camera system, the differences between the two Pro sizes now are simply in quantity, not in quality.",
                "price": 21499,
                "colors": ["silver", "red", "blue", "pink", "black"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "iphone 12",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/iphone12-gorseli-110629_large.jpg",
                "description": "iPhone 12 64 GB",
                "content": "Blast Past Fast. It's an apt tagline with Apple skipping the S models and going straight to the iPhone 12 from the already fast iPhone 11. But it's not just the improved speed that you'd be getting. The iPhone 12 also comes with a slew of other upgrades, including a new design with improved durability, an OLED screen, and 5G support. The new OLED screen has smaller-than-ever bezels, plus there is also the new magnetically attached MagSafe charging support. It is also one of the lightest iPhones you can buy. What's not to like?",
                "price": 14999,
                "colors": ["white", "red", "blue", "purple", "black", "green"],
                "count": 1
            }
        ],

        android: [
            {
                "_id": "1",
                "title": "Xiaomi Redmi Note 10S",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/xiaomi/thumb/129611-3_large.jpg",
                "description": "Xiaomi Redmi Note 10S 128 GB",
                "content": "The Redmi Note 10S is yet another smartphone from Xiaomi in the crowded Redmi Note 10 series. This one is being launched in India amidst three other Redmi Note 10 models, including the Redmi Note 10, the Redmi Note 10 Pro, and the Redmi Note 10 Pro Max.",
                "price": 4000,
                "colors": ["white", "grey", "blue"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Samsung galaxy s21",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/117722-anaa_large.jpg",
                "description": "Samsung Galaxy S21 5g 128 GB",
                "content": "The Galaxy S21 FE is finally out, and it builds on the successful Galaxy S20 FE by combining the best traits of the Galaxy S21 phones and putting them into a phone that's more affordable and has a number of fan-favorite features.",
                "price": 11499,
                "colors": ["white", "grey", "pink", "violet"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Huawei Nova 9",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/huawei/thumb/130803-4_large.jpg",
                "description": "Huawei Nova 9 128 GB",
                "content": "The Huawei nova series is intended for the younger generation with flashy looks and relatively low prices. The nova 9 family isn't far from the original formula. We got the vanilla nova 9 for this review, but the Pro model seems to be only slightly different - it has a bigger display, a smaller battery with faster charging and a secondary selfie camera. Sadly, only the standard nova 9 is making its way to the international market leaving the Pro to be a China-exclusive.",
                "price": 9999,
                "colors": ["lightblue", "black"],
                "count": 1
            },
        ],

        ios: [
            {
                "_id": "4",
                "title": "iphone 13",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/bas-liks-10_large.jpg",
                "description": "iPhone 13 128 GB",
                "content": "One small reduction of the notch, one giant leap for the iPhone! That's the best description for the most minor iPhone upgrade yet - the Apple iPhone 13. But even if it won't make iPhone 12 owners line up for the new model, like it or not, the iPhone 13 is still one of the most powerful smartphones on the market and a bestseller in the making.",
                "price": 16299,
                "colors": ["silver", "red", "blue", "pink", "black"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "iphone 13 pro",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129911-7_large.jpg",
                "description": "iPhone 13 Pro 128 GB",
                "content": "The 'biggest camera update ever' on an iPhone doesn't have to come in a big iPhone, at least not a Max-sized one - the iPhone 13 Pro will do. Unlike last year, when only the 12 Pro Max got the ultimate camera system, the differences between the two Pro sizes now are simply in quantity, not in quality.",
                "price": 21499,
                "colors": ["silver", "red", "blue", "pink", "black"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "iphone 12",
                "src": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/iphone12-gorseli-110629_large.jpg",
                "description": "iPhone 12 64 GB",
                "content": "Blast Past Fast. It's an apt tagline with Apple skipping the S models and going straight to the iPhone 12 from the already fast iPhone 11. But it's not just the improved speed that you'd be getting. The iPhone 12 also comes with a slew of other upgrades, including a new design with improved durability, an OLED screen, and 5G support. The new OLED screen has smaller-than-ever bezels, plus there is also the new magnetically attached MagSafe charging support. It is also one of the lightest iPhones you can buy. What's not to like?",
                "price": 14999,
                "colors": ["white", "red", "blue", "purple", "black", "green"],
                "count": 1
            }
        ],

        cart: [],
        total: 0

    };

    addCart = (id) => { //Belirli ürünü sepete eklemek için kullanılan fonksiyon

        const { allproducts, cart } = this.state; //tüm ürünler ve sepetteki ürünler değişkenlere atanıyor
        const check = cart.every(item => { //eklenmek istenen ürün sepette var mı kontrol ediliyor
            return item._id !== id
        })
        if (check) { //ürün sepette yoksa sepete ekleme yapılıyor(sepetin durumu güncelleniyor)
            const data = allproducts.filter(product => { //sepete eklenecek ürünün id'si tüm ürünlerde bulunup bilgileri çekiliyor
                return product._id === id
            })
            this.setState({ cart: [...cart, ...data] }) //sepet güncelleniyor(önceki ürünler + yeni ürünler)
        } else { //ürün zaten sepette varsa uyarı veriyor
            alert("The product has been added to cart.")
        }
    };

    reduction = id => { //Bir ürünün sepetteki sayısını azaltıyor
        const { cart } = this.state; //sepet sözlüğü alınıyor
        cart.forEach(item => { //sepette ürün 1 taneyse aynı kalmaya devam ediyor daha çoksa sayısı 1 azaltılıyor
            if (item._id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        this.setState({ cart: cart }); //sepet güncelleniyor
        this.getTotal(); //toplam fiyat güncelleniyor
    };

    increase = id => { //bir ürünün sepetteki sayısını arttırıyor
        const { cart } = this.state;
        cart.forEach(item => { //sepetteki ürünün sayısı 1 arttırılıyor
            if (item._id === id) {
                item.count += 1;
            }
        })
        this.setState({ cart: cart }); //sepet güncelleniyor
        this.getTotal(); //toplam fiyat güncelleniyor
    };

    removeProduct = id => { //sepetteki bir ürünün silinmesini sağlıyor
        if (window.confirm("Do you want to delete this product?")) { //ürünün silinmesini onaylamak için bir pop-up çıkarıyor
            const { cart } = this.state;
            cart.forEach((item, index) => { //sepette seçilen indeksteki ürün siliniyor
                if (item._id === id) {
                    cart.splice(index, 1)
                }
            })
            this.setState({ cart: cart }); //sepet güncelleniyor
            this.getTotal(); //toplam fiyat güncelleniyor
        }

    };

    getTotal = () => { //toplam fiyatı güncelliyor
        const { cart } = this.state;
        const result = cart.reduce((prev, item) => { //yeni eklenen ürünlerin fiyatları eski fiyata ekleniyor
            return prev + (item.price * item.count);
        }, 0)
        this.setState({ total: result }) //toplam fiyat güncelleniyor
    };


    render() {
        const { bestselling, allproducts, android, ios, cart, total } = this.state;
        const { addCart, reduction, increase, removeProduct, getTotal } = this;
        return (
            <DataContext.Provider //Context'teki tüm veriler kullanılmak üzere child componentlara gönderiliyor
                value={{ bestselling, allproducts, android, ios, addCart, cart, reduction, increase, removeProduct, total, getTotal }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


