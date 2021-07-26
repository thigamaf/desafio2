import React, { useState, useEffect } from 'react';
import { Container } from '../style';
import api from "../../services/api";
import Cart from "../../assets/cart.jpg";
import Vtex from "../../assets/logoVtex.png";
import Link from '@material-ui/core/Link';


interface Iproduct{
    id: number;
    photo: string;
    name: string;
    description: string;
    price: number;
}

const Products: React.FC = () => {
const [data, setData] = useState<Iproduct[]>([]);
const [cart, setCart] = useState<Iproduct[]>([]);

useEffect(() => {
    api.get('').then(response => {
        setData(response.data)
    }
    )
}, [])

const handleCart = (index: number) => {
    let push: any = [ ...cart, cart.push(data[index])]
    setCart(push)
    const productStore = JSON.stringify(cart);
    localStorage.setItem(`@cart`, productStore)
}

    return (
    <Container>
        <div className= "nav">
            <div>
                <img src={Vtex} alt="logoVtex" width="200px" height="auto"/>
                <button></button>
            </div>
        </div>
        <div className="cart">
            <img src={Cart} alt="logoCarrinho" width="50px" height="auto" text-align="center"/>
            <span>({cart.length}) Itens</span>
            </div>
            <div className= "nav">
            <Link href="/finalizarpedido" >Finalizar Pedido</Link>
        </div>
        <section>
            { data.map( (prod, index) => (
                <div className="product-content" key={prod.id}>
                <img src={prod.photo} alt={prod.name} width="250" height="200" />
                <h4>{prod.name}</h4>
                <span>{prod.description}</span>
                <h6>R$ {prod.price},00</h6>
                <button onClick= {() => handleCart(index)}>Adicionar ao Carrinho</button>
            </div>
            ))}
        </section>
    </Container>
)
}

export default Products;