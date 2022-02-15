import { useState } from "react";
import "../Products/products.css"
import { Data } from "../Products/Data";
import { useSelector, useDispatch } from "react-redux";
import Button from '../Components/button/ButtonFilter';


const Products = () => {
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();

  const allCategories = ['Todos', ...new Set(Data.map(product => product.category))];

  const [productItem, setProductItem] = useState(Data);
  const [buttons, setButtons] = useState(allCategories);

  const filter = (button) =>{

    if(button === 'Todos'){
      setProductItem(Data);
      return;
    }

    const filteredData = Data.filter(product => product.category ===  button);
    setProductItem(filteredData)
  }

  return (

      <>
      <h1 className="first-text">PRODUCTOS</h1>
      <Button button={buttons} filter={filter} />
      {productItem.map((item) => {
        item.quantity = 1;
        return (
      <div className="container">
				<div className="card" key={item.id}>
					<div className="left-column background1-left-column">

						<img src={`${process.env.PUBLIC_URL}/img/${item.img}`} alt={item.name} width="150px" className="img-fluid img"/>
						<h6>{item.name}</h6>
						<h6>${item.price}</h6>
						<h6></h6>
					</div>

					<div className="right-column">
						<div>
							<h4>Descripción</h4>

						</div>
						<p>{item.description}</p>
            <div className="right-column-btn">
            {cart.length > 0 && <button type="button" onClick={() => {
                    if (item.quantity > 1) {
                      dispatch({ type: "DECREASE", payload: item });
                    } else {
                      dispatch({ type: "REMOVE", payload: item });
                    }
                  }} className="button background1-left-column"><h1>-</h1></button>}
						<button type="button" onClick={() => dispatch({ type: "ADD", payload: item })} className="button background1-left-column"><h1>+</h1></button>
            </div>
					</div>

				</div>

		</div>
     );
    })}
    </>

  );
}

export default Products;
