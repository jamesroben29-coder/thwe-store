import { Star, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { newArrivalProducts } from "../data/products";
import { useSearch } from "../context/useSearch";
import { useCart } from "../context/useCart";
import { useWishlist } from "../context/useWishlist";


const NewProducts = () => {
  const { search, category, sort } = useSearch();
  const { addToCart } = useCart();

  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();

  const filteredNewArrivals = newArrivalProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category.toLowerCase() === category.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const sortedNewArrivals = [...filteredNewArrivals].sort((a, b) => {
    if (sort === "price-low-to-high") {
      return a.price - b.price;
    }

    if (sort === "price-high-to-low") {
      return b.price - a.price;
    }

    if (sort === "rating-high-to-low") {
      return b.rating - a.rating;
    }

    if (sort === "alpha-a-to-z") {
      return a.name.localeCompare(b.name);
    }

    return 0;
  });

  return (
    <div className="new-products-container">
        
      {sortedNewArrivals.length > 0 ? (
        sortedNewArrivals.map((product) => {
          const activeWishlist = wishlistItems.some(
            (item) => item.id === product.id,
          );

          const handleWishlist = () => {
            if (activeWishlist) {
              removeFromWishlist(product.id);
            } else {
              addToWishlist(product);
            }
          };

          return (
            <div className="new-product-card" key={product.id}>
              <span className="new-product-badge">New</span>

              <button
                type="button"
                className={`new-heart-btn ${activeWishlist ? "active" : ""}`}
                onClick={handleWishlist}
                aria-label="Add to wishlist"
              >
                <Heart size={19} />
              </button>

              <Link
                to={`/products/${product.id}`}
                className="new-product-image-link"
              >
                <div className="new-product-image">
                  <img src={product.image} alt={product.name} />
                </div>
              </Link>

              <div className="new-product-info">
                <h3>{product.name}</h3>

                <p className="new-product-category">{product.category}</p>

                <div className="new-product-bottom">
                  <div className="new-price-box">
                    <span className="new-current-price">${product.price}</span>

                    {product.originalPrice && (
                      <span className="new-original-price">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="new-rating-box">
                    <Star
                      size={17}
                      fill="var(--warning)"
                      color="var(--warning)"
                    />

                    <span>{product.rating}</span>

                    {product.reviewCount && (
                      <span className="new-review-count">
                        ({product.reviewCount})
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  className="new-add-to-cart-btn"
                  onClick={() => addToCart(product, 1)}
                >
                  <ShoppingCart size={18} />

                  <span>Add To Cart</span>
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="no-products">No new arrivals match your filter.</div>
      )}
    </div>
  );
};

export default NewProducts;
