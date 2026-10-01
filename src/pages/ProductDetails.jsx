
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products ,newArrivalProducts } from '../data/products';
import { useCart } from '../context/useCart';
import { useWishlist } from '../context/useWishlist';


const ProductDetails = () => {

  const { id } = useParams();
  const [ quantity, setQuantity ] = useState(1);
  const { addToCart } = useCart();
  const { wishlistItems,  addToWishlist, removeFromWishlist } = useWishlist();

  const product = products.find((item) => item.id === Number(id))
                  || newArrivalProducts.find((item) => item.id === Number(id));

  if(!product){
      return (<div className="product-not-found">
          <h2>Product Not Found</h2>
          <p>The product you are looking for does not exist.</p>
      </div>)
  }

  return (
    <>
        <div className='product-details-container'>
            <div className="breadcrumb">
                <span>Home</span>
                <span>&gt;</span>
                <span>Products</span>
                <span>&gt;</span>
                <span>{product.category}</span>
                <span>&gt;</span>
                <span>{product.name}</span>
            </div>

            <div className="product-details-main">
                <div className="product-details-image-box">
                    <img src={product.image} 
                    alt={product.name} className='details-image'/>
                </div>

                <div className="product-details-info">
                    <span className="product-category">
                        {product.category}
                    </span>
                    <h2>{product.name}</h2>

                    <div className="product-rating">
                        <span>⭐</span>
                        <span>{product.rating}</span>
                    </div>
                    <div className="product-price">
                        Price - ${product.price}
                    </div>
                    <p className="product-description">
                        The {product.name} delivers powerful performance,
                        stunning display, and all-day battery life.
                    </p>

                    <div className="quantity-section">
                        <span>Quantity</span>
                        
                        <div className="quantity-controls">
                            <button onClick={() => setQuantity(prev => Math.max( 1, prev - 1))} disabled={ quantity === 1}
                            >-</button>
                             <span>{quantity}</span>
                            <button onClick={() => setQuantity((prev) => prev + 1)}
                            >+</button>
                        </div>
                    </div>

                    <div className="product-actions">
                        <button className="add-cart-btn" 
                        onClick={() => {addToCart(product, quantity)}}>
                            Add To Cart
                        </button>
                        <button className="wishlist-btn" onClick={() => wishlistItems.some((item) => 
                            item.id === product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}>
                            💗Wishlist
                        </button>
                    </div>

                </div>
            </div>
        </div>

        <div className="product-details-tab">
            <div className="tab-buttons">
                <button>Description</button>
                <button>Specification</button>
                <button>Reviews</button>
            </div>

            <div className="tab-content">
                <p>Product description for {product.name}</p>
                <ul>
                    <li>✓ Feature 1</li>
                    <li>✓ Feature 2</li>
                    <li>✓ Feature 3</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default ProductDetails;