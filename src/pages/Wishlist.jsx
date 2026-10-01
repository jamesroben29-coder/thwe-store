import { useWishlist } from "../context/useWishlist";
import {
  House,
  Heart,
  Star,
  Trash2,
  ShoppingCart,
  Truck,
} from "lucide-react";
import { useCart } from "../context/useCart";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const wishlistCount = wishlistItems.length;

  const { addToCart } = useCart();

  return (
    <div className="wishlist-page">
      <div className="wishlist-page-container">

        <div className="wishlist-page-header-box">
          <div className="wishlist-header-text">
            <h2>Wishlist Items</h2>
            <p>Your saved items ({wishlistCount})</p>
          </div>

          <div className="wishlist-breadcrumb">
            <House size={21} />
            <span>›</span>
            <span>Home</span>
            <span>›</span>
            <span>Wishlist</span>
          </div>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="not-found-wishlist">
            <h2>Not Found Wishlist Items!</h2>
            <p>
             🛍️ Quick add your favorite products to your wishlist!
            </p>
          </div>
        ) : (

          <div className="wishlist-list-box">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="wishlist-item-box"
              >
                <div className="wishlist-image-box">

                  {item.originalPrice &&
                    item.originalPrice > item.price && (
                      <span className="wishlist-sale">
                        -
                        {Math.round(
                          ((item.originalPrice - item.price) /
                            item.originalPrice) *
                            100
                        )}
                        %
                      </span>
                    )}

                  <button className="wishlist-heart-btn">
                    <Heart
                      size={20}
                      className="wishlist-heart-icon2"
                      fill="currentColor"
                    />
                  </button>

                  <img
                    src={item.image}
                    alt={item.name}
                    className="wishlist-image"
                  />
                </div>

                <div className="wishlist-product-info">

                  <h3 className="wishlist-name">
                    {item.name}
                  </h3>
                  <p className="wishlist-category">
                    {item.category}
                  </p>

              
                  <div className="wishlist-rating-stock">

                    <div className="wishlist-rating">
                      <Star
                        size={18}
                        fill="currentColor"
                      />

                      <span>{item.rating}</span>

                      {item.reviewCount && (
                        <>
                          <span className="wishlist-divider">
                            |
                          </span>

                          <span className="wishlist-reviews">
                            ({item.reviewCount})
                          </span>
                        </>
                      )}
                    </div>

                    <span className="wishlist-stock">
                      <Truck size={17} />
                      In Stock
                    </span>

                  </div>

                  <div className="wishlist-price-box">

                    <span className="wishlist-price">
                      ${item.price}
                    </span>

                    {item.originalPrice &&
                      item.originalPrice > item.price && (
                        <span className="wishlist-original-price">
                          ${item.originalPrice}
                        </span>
                      )}

                  </div>

                  <div className="wishlist-btn-group">
                    <button
                      className="wishlist-remove-btn"
                      onClick={() =>
                        removeFromWishlist(item.id)
                      }
                    >
                      <Trash2 size={17} />
                      Remove
                    </button>

                    <button
                      className="wishlist-cart-btn"
                      onClick={() => {
                        addToCart(item, 1);
                      }}
                    >
                      <ShoppingCart size={17} />
                      Add To Cart
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;