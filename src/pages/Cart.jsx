import { useCart  } from '../context/useCart';
import { Minus, Plus, Trash } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  
  const navigate = useNavigate();
  
  const { cartItems , setCartItems, decreaseQuantity, increaseQuantity} = useCart();
  const subTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 
        subTotal >= 2500 ? 0 : 
        subTotal <  500 ? 15 :
        subTotal <  1000 ? 10 : 
        subTotal <  1500 ? 5 : 3;
  const totalPrice = subTotal + shipping;

  const removeItems = (id) => {
      setCartItems(cartItems.filter((item) => item.id !== id));
  }

  return (
    <>
        <div className='shopping-cart'>
          <h2>Shopping Carts</h2>
          <p>Review your items and proceed to checkout</p>
        </div>
          <div className='cart-container'>

            <div className='shopping-cart-left'>
                  <div className="cart-content">

                      <div className="cart-items">

                        <div className="cart-header">
                          <span>Product</span>

                          <div className='cart-header-second'>
                            <span>Price</span>
                            <span>Quantity</span>
                            <span>Action</span>
                          </div>
                        </div>

                        {cartItems.length === 0 ?
                          (<div className='empty-item-box'>
                              <h2>Not found any items!</h2>
                              <p>🛍️Please buy someing you wish from products page!</p>
                          </div>
                          ) :
                          (cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <div className="cart-product">
                                      <div className="cart-imag-box">
                                        <img
                                          src={item.image}
                                          alt={item.name}
                                          className='cart-image'/>
                                      </div>
                                      <div>
                                        <h4>{item.name}</h4>
                                        <p>{item.category}</p>
                                      </div>
                                </div>    
                                <div className='cart-second'>
                                    <div className="cart-price">
                                      ${item.price * item.quantity}
                                    </div>
                                    <div className="cart-quantity">
                                      <button onClick={() => decreaseQuantity(item.id)}>
                                        <Minus size={16} />
                                      </button>

                                      <span>
                                        {item.quantity}
                                      </span>

                                      <button onClick={() => increaseQuantity(item.id)}>
                                        <Plus size={16} />
                                      </button>
                                    </div>
                                    <div className="cart-trash-box">
                                      <Trash size={20} color='red' className='cart-trash'
                                        onClick={() => removeItems(item.id)}
                                      />
                                    </div>
                                </div>
                          </div>
                          )))
                        }

                      </div>

                  </div>

            </div>

            <div className='cart-summery'>
                <h2>Cart Summery</h2>

                <div className="summery-row">
                    <span>Subtotal</span>
                    <span>{subTotal.toFixed(2)}</span>
                </div>
                <div className="summery-row">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? "free" : ""}>
                      {cartItems.length === 0 ?   "$00.00" :
                          shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`
                      }
                    </span>
                </div>
                <hr />
                <div className="summery-row subtotal">
                    <span>Total</span>
                    <span>${cartItems.length === 0 ? "00.00" : totalPrice.toFixed(2)}</span>
                </div>
                <div className="checkout-btn-box">
                    <button className="checkout-btn" onClick={() => navigate("/checkout")}
                      disabled={cartItems.length === 0}
                    >Proceed to Checkout</button>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Cart;