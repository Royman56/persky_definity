import React from 'react';
import "../Cart/cart.css"
import { useSelector, useDispatch } from "react-redux";
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Cart = () => {
  const cart = useSelector((state) => state);

  console.log(cart);
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };

  const nameStr = (acc, currentvalue) => {
    return acc + currentvalue.name;
  };

  const priceNbr = (acc, currentvalue) => {
    return acc + currentvalue.price;
  };

  const size = (acc, currentvalue) => {
    return acc + currentvalue.size;
  };

  const total = cart.reduce(addition, 0);
  const name = cart.reduce(nameStr, 0);
  const price = cart.reduce(priceNbr, 0);
  const description = cart.reduce(size, 0);

  return (
    <>
    {cart.length > 0 && <h1 className="first-text">CARRITO DE COMPRAS</h1>}
    {cart.map((item) => {
      return (
		<div className="container-cart">
      <div className="card-cart" key={item.id}>
					<div className="left-column-cart background1-left-column-cart">

						<img src={`${process.env.PUBLIC_URL}/img/${item.img}`} alt={item.name} width="150px" className="img-fluid img-cart"/>
						<h6>{item.name}</h6>
						<h6>${item.price} x {item.quantity} = ${item.price * item.quantity}.000</h6>
					</div>

					<div className="right-column-cart">
						<div>
							<h4>Descripción</h4>

						</div>
						<p>{item.description}</p>
						<div className="right-column-btn">
						<button type="button" onClick={() => {
                    if (item.quantity > 1) {
                      dispatch({ type: "DECREASE", payload: item });
                    } else {
                      dispatch({ type: "REMOVE", payload: item });
                    }
                  }} className="button-cart background1-left-column "><h1>-</h1></button>
						<button type="button" onClick={() => dispatch({ type: "INCREASE", payload: item })} className="button-cart background1-left-column"><h1>+</h1></button>
						</div>
					</div>

				</div>
        
				</div>
         );
      })}
    
      {cart.length === 0 && <div className="container-home">
      {cart.length === 0 && <h1 className="first-text">CARRITO DE COMPRAS</h1>}
     {cart.length === 0 && <h1 className="second-text">TU CARRITO DE COMPRAS ESTA VACIO:(<br/>
     AÑADE ALGUN PRODUCTO!</h1>}
        </div>}
          <>
      
        <div>
          
        {total > 0 && <h2 className='btn-cart'>total:{total}.000</h2>}
      <IconContext.Provider value={{ color: '#fff' }}>

        {total > 0 && <a href={`https://api.whatsapp.com/send?phone=573222534986&text=Hola, Estoy interesado en los siguientes productos: \n\n ${name}\n%20Precio: \n\n $${price}\n%20Tallas: ${description}\n%20\nEl valor total de mi compra es: $${total.toFixed(3)}%20`} target="_blank" className='btn-what'>Hacer Pedido<FaIcons.FaWhatsapp className='icon-whatsapp'/></a>}
        </IconContext.Provider>
        </div>
        
        </>
      </>
	);
};

export default Cart;
