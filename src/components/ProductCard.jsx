import { Star, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import { useWishlist } from "../context/useWishlist";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();

  const activeWishlist = wishlistItems.some((item) => item.id === product.id);

  const handleWishlist = () => {
    if (activeWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const discount = product.discount ?? 20;

  const originalPrice =
    product.originalPrice ?? Math.round(product.price / (1 - discount / 100));

  const reviewCount = product.reviewCount ?? 120;

  return (
    <div className="products-card">
      <span className="sale-btn">-{discount}%</span>

      <button
        type="button"
        className={`heart-btn ${activeWishlist ? "active" : ""}`}
        onClick={handleWishlist}
        aria-label="Add to wishlist"
      >
        <Heart size={20} />
      </button>

      <Link to={`/products/${product.id}`} className="product-image-link">
        <div className="image-box">
          <img src={product.image} alt={product.name} />
        </div>
      </Link>

      <div className="product-info">
        <h3>{product.name}</h3>

        <p className="product-category">{product.category}</p>

        <div className="product-bottom">
          <div className="price-box">
            <span className="price">${product.price}</span>

            <span className="old-price">${originalPrice}</span>
          </div>

          <div className="rating-box">
            <Star size={18} fill="var(--warning)" color="var(--warning)" />

            <span>{product.rating}</span>

            <span className="review-count">({reviewCount})</span>
          </div>
        </div>

        <button
          type="button"
          className="add-to-cart-btn"
          onClick={() => addToCart(product, 1)}
        >
          <ShoppingCart size={18} />
          <span>Add To Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
