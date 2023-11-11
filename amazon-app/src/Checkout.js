import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal.js";


function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
    <div className="checkout__left">
      <img
        className="checkout__ad"
        src="https://static.amazon.jobs/teams/415/images/A20M_Team_Page_Banner.jpg?1539742936"
        alt=""/>
        {basket?.length === 0 ? (
            <div>
                <h2> Your Basket is Empty</h2>
                <p>You have no items in your basket. To buy items, click "Add to Basket" next to item</p>

            </div>
        ) : (
            <div>
                <h2 className="checkout__title">Your Basket</h2>
                {basket?.map ((item) => (
                  <CheckoutProduct 
                    id = {item.id}
                    title = {item.title}
                    image = {item.image}
                    price = {item.price}
                    rating = {item.rating}
                  />
                ))}
                
            </div>
        )}
        </div>
        {basket.length > 0 && (
          <div className="checkout__right">
          <Subtotal/>
          </div>
        )}
    </div>
  );
}

export default Checkout;
