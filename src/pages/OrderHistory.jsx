import { Calendar,CircleCheck,ChevronUp , Package, ClipboardList , Truck, Wallet, MoveRight } from 'lucide-react';
import { useCart } from '../context/useCart';
import { useNavigate } from 'react-router-dom';

const OrderHistory = () => {

    const navigate = useNavigate();
    const { orders } = useCart();


  return (
    <div className='order-history-page'>
        <div className="order-history-page-container">
            <div className="order-history-header-section">
                <div>
                    <h2>Order History</h2>
                    <p>View your previous orders and their status</p>
                </div>
                <div className="order-history-list">
                    <input type="text" className='search-box' placeholder='Search'/>
                    <select className='order-history-option-box'>
                        <option value="all-orders">All Orders</option>
                        <option value="delivered-orders">Delivered Orders</option>
                        <option value="current-orders">Current Orders</option>
                        <option value="packaged-orders">Packaged Orders</option>
                    </select>
                </div>
            </div>

            {orders.length === 0 ? 
                (
                    <div className='order-history-empty-box'>
                        <h2>Empty Orders!</h2>
                        <p> 🛍️Please add some orders you wish from products page!</p>
                    </div>
                ) 
                : 
                (
                    <div style={{marginTop : "20px"}}>
                            {orders.map((order) => { 
                                const totalItems = order.items.reduce((total, item) => total + item.quantity,0);
                                const subTotal = order.items.reduce((total , item ) => total + item.price * item.quantity,0);
                                const shipping = subTotal >= 2500 ? 0 : 
                                                subTotal < 500 ? 15 :
                                                subTotal < 1000 ? 10 :
                                                subTotal < 1500 ? 5 : 3;
                                const total = subTotal + shipping;

                                return   <div className="order-history-main-section" key={order.id}>
                                    <div className="or-hi-main-header">
                                        <div className="or-hi-main-header-left">
                                            <div key={order.id} className='calendar-date-box'>
                                                <h4>Order # THW {order.id}</h4>
                                                <div>
                                                    <Calendar className='or-hi-calendar-icon' />
                                                    <span>Placed on{new Date(order.date).toLocaleDateString()} </span>
                                                </div>
                                            </div>   
                                        </div>
                                        <div className="or-hi-main-header-right">
                                            <div className='or-hi-main-header-right-first'>
                                                <div className='flex-status-box'>
                                                    <CircleCheck/>
                                                    <span>{order.status}</span>
                                                </div>
                                            </div>
                                            <ChevronUp className='or-hi-chevron-up-icon'/>
                                        </div>
                                    </div>

                                    <div className="or-hi-main-item-card-section">
                                    
                                        <div className='order-array' >
                                            <div className="or-hi-item-list">
                                                {order.items.map((item) => 
                                                    <div className="or-hi-item-cards" key={item.id}>
                                                        <div className="or-hi-img-box">
                                                            <img src={item.image} alt={item.name} 
                                                            style={{width: "80px", height: "auto"}}/>
                                                        </div>
                                                        <div className="or-hi-info-text">
                                                            <p>{item.name}</p>
                                                            <p>{item.quantity}X</p>
                                                            <small>${item.price.toFixed(2)}</small>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                    </div>

                                    <div className="or-hi-order-summery-section">
                                        <div className="or-hi-order-summery-list">
                                            <div className="or-hi-summery-item">
                                                <Package size={25}/>
                                                <div>
                                                    <span>TotalItems</span>
                                                    <span>{totalItems}</span>
                                                </div>
                                            </div>
                                            <div className="or-hi-summery-item">
                                                <ClipboardList size={25}/>
                                                <div>
                                                    <span>SubTotal</span>
                                                    <span>$
                                                        {subTotal}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="or-hi-summery-item">
                                                <Truck size={25} />
                                                <div>
                                                    <span>Shipping</span>
                                                    <span>${ shipping }</span>
                                                </div>
                                            </div>
                                            <div className="or-hi-summery-item">
                                                <Wallet size={25} className='or-hi-wallet-icon'/>
                                                <div>
                                                    <span className='wallet-info'>Total</span>
                                                    <span className='wallet-info'>${total}</span>
                                                </div>
                                            </div>
                                            <div className="or-hi-view-details-btn-box">
                                                <button className='or-hi-view-details-btn' 
                                                onClick={() => navigate(`/orderdetails/${order.id}`)}>
                                                    View Details 
                                                    <MoveRight/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                        </div>
                            })}

                    </div>
                )
            }
                
        </div>

        {/* <div className="order-history-pagination-section">
        </div> */}
    </div>
  )
}

export default OrderHistory;