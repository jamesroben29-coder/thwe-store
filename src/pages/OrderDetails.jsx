import { ChevronUp , Calendar,CircleCheck,PackageCheck,MapPin, ClipboardList } from "lucide-react"
import { useParams } from 'react-router-dom'
import { useCart } from '../context/useCart'

const OrderDetails = () => {

    const { id } = useParams();
    const { orders } = useCart();
    console.log("Id is : ", id);

    const currentOrder = orders.find(
        (order) => String(order.id) === String(id)
    );
    console.log("Answer are : ",currentOrder);

    const totalItems = currentOrder.items.length;
    const subTotal = currentOrder.items.reduce((total, order) => total + order.price * order.quantity,0);
    const shipping = currentOrder.summary.shipping;
    const total = subTotal + shipping;

  return (
    <div className='order-details-page'>
        <div className="order-details-container">

            <div className="order-details-header-sec">
                <div className='order-det-header-left'>
                    <div className='calendar-date-box'>
                        <h4>
                            Order # THW {currentOrder.id}
                        </h4>
                        <div>
                            <Calendar className='or-hi-calendar-icon' color='var(--success)'/>
                            <span>
                                Placed on { new Date(currentOrder.date).toLocaleDateString()}
                             </span>
                        </div>
                    </div>   
                    
                </div>
                <div className='order-det-header-right'>
                    <div className='order-det-header-right-first'>
                        <div className='flex-status-box'>
                            <CircleCheck />
                            <span>
                                {currentOrder.status}
                            </span>
                        </div>
                    </div>
                    <ChevronUp className='or-hi-chevron-up-icon'/>
                </div>
            </div>
            
            <div className='order-details-main-sec'>
                <div className='main-head-order-items-sec'>
                    <PackageCheck/>
                    <h3>Ordered Items</h3>
                </div>

                <div className="main-head-items-info">
                    <div className="main-head-items-info-row-header">
                        <span>Product</span>
                        <span>Price</span>
                        <span>Quantity</span>
                        <span>Subtotal</span>
                    </div>

                    {currentOrder.items.map((item) => 
                        <div className='main-head-items-info-contents' key={item.id}>
                            <div>
                                <img src={item.image} 
                                alt={item.name} style={{width: "100px", borderRadius: "5px", 
                                boxShadow: "0 5px 10px rgba(0, 0, 0, 0.08)"}}/>
                                <h4>{item.name}</h4>
                            </div>
                            <p>${item.price}</p>
                            <p>{item.quantity}x</p>
                            <p>${item.price * item.quantity}</p>
                        </div>
                    )}
                    
                </div>

                <div className="main-body-info-sec">
                    <div className="main-body-shipping-info-box">
                        <div className='main-body-shipping-header'>
                            <MapPin/>
                            <h3>Shipping Informations</h3>
                        </div>
                        <div className='main-body-shipping-description'>
                            <div>
                                <span>Full name</span>
                                <span>- {currentOrder.customer?.fullName}</span>
                            </div>
                            <div>
                                <span>Email</span>
                                <span>- {currentOrder.customer?.email}</span>
                            </div>
                            <div>
                                <span>Phone</span>
                                <span>- +{currentOrder.customer?.phone}</span>
                            </div>
                            <div>
                                <span>Address</span>
                                <span>- No -{currentOrder.customer?.city},{""}
                                            {currentOrder.customer?.state},{""},
                                            {currentOrder.customer?.country},{""},
                                            {currentOrder.customer?.zip}
                                </span>
                            </div>
                            <div>
                                <span>Shipping method</span>
                                <span>- {currentOrder.customer?.shippingMethod === "delivery" 
                                    ? "Home Delivery" : "Store Pickup"}

                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="main-body-order-summery-sec">
                        <div className='main-body-order-summery-header'>
                            <ClipboardList/>
                            <h3>Order Summery</h3>
                        </div>

                        <div className='main-body-order-summery-description'>
                            <div>
                                <span>Item total</span>
                                <span>- {totalItems} items</span>
                            </div>
                            <div>
                                <span>Subtotal</span>
                                <span>- ${subTotal.toFixed(2)}</span>
                            </div>
                            <div>
                                <span>Shipping</span>
                                <span>- ${shipping.toFixed(2)}</span>
                            </div>
                            <div>
                                <span>Total</span>
                                <span>- ${total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default OrderDetails;