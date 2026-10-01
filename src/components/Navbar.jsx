import { useState, useEffect } from "react";
import { Link , useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";
import { useWishlist } from "../context/useWishlist";
import { useAuth } from "../context/AuthContext";
import { useSearch } from "../context/useSearch";

import {
  ShoppingBag,
  X,UserRound,
  Menu,
  Heart,
  ShoppingCart,
  ChevronDown,
  User,
  Search,
  Package,
  Settings,
  LogIn,
  UserPlus,
  LogOut,
} from "lucide-react";
import "./components.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ isOpenMenu , setIsOpenMenu ] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const { currentUser } = useAuth();
  const { search, setSearch, setCategory } = useSearch();

  useEffect(() => {
      const handleResize = () => {
          if(window.innerWidth > 990 ){
              setIsOpenMenu(false);
          }
      };

      const resizeScreen =  window.addEventListener("resize", handleResize);

      return resizeScreen;
  },[]);

  const handleDropDown = () => {
        setIsOpen(prev => !prev);
  }

  const handleToggleMenu = () => {
      setIsOpenMenu(prev => !prev);
  }

  const totalQuantity = cartItems.reduce((total , item) => total + item.quantity , 0);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (!search.trim()) {
      navigate("/products");
      return;
    }

    setCategory("All");
    navigate("/products");
  };


  return (
    <div className="c-navbar">
      <header>
        <ShoppingBag size={23} className="shopping-logo" />
        <h2>
          Thwe-<span>Store</span>
        </h2>
      </header>

      <nav>
        <ul className="navlinks">
          <li>
            <Link to="/" className="link">Home</Link>
          </li>
          <li>
            <Link to="/products" className="link">Products</Link>
           </li>
          <li>
            <Link to="/about" className="link">About</Link>
          </li>
          <li>
            <Link to="/contact" className="link">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="search-box" onSubmit={handleSearchSubmit}>
         <Search size="14px" />
         <input type="text" 
         value={search}
         onChange={(e) => setSearch(e.target.value)}
         onKeyDown={(e) => {
            if(e.key === "Enter"){
                navigate("/products");
            }
         }}
         placeholder="Search..." />
      </div>

      <div className="nav-right">
        <Link to="/wishlist" className="wishlist-link-box">
            <Heart size={22} color="var(--primary)" className="nav-heart-icon"/>
            {wishlistItems.length > 0 && 
              (<span className={`count-badge`}>
              {wishlistItems.length}
            </span>)
            }
        </Link>

        <div className="nav-cart-box" onClick={() => navigate("/cart")}>
            <ShoppingCart size={22} color="var(--primary)" className="nav-cart-icon"/>
              {totalQuantity > 0 && (
                <span className="quantity-count">
                  {totalQuantity}
                </span>
              )}
            
        </div>

          <div className="user-dropdown-group">
            <div
              className="user-dropdown-trigger"
              onClick={handleDropDown}
            >
              <UserRound
                className="nav-user-icon"
                size={22}
              />

              <ChevronDown
                size={16}
                color="var(--primary)"
                className={`drop-down-icon ${isOpen ? "rotate" : ""}`}
              />
            </div>

            {isOpen && (
              <ul className="dropdown-box">
                  {currentUser ? 
                  ( 
                    <>
                      <li>
                        <Link to="/profile" className="dropdown-link"
                              onClick={() => setIsOpen(false)}
                            >
                            <User
                              size={20}
                              className="icons-from-dropdown"
                            />
                            <span>My Profile</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="/orderhistory" className="dropdown-link"
                              onClick={() => setIsOpen(false)}>
                            <Package
                              size={20}
                              className="icons-from-dropdown"
                            />
                            <span>Order History</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="/wishlist" className="dropdown-link"
                              onClick={() => setIsOpen(false)}>
                            <Heart
                              size={20}
                              className="icons-from-dropdown"
                            />
                            <span>Wishlist</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="setting" className="dropdown-link"
                              onClick={() => setIsOpen(false)}>
                            <Settings
                              size={20}
                              className="icons-from-dropdown"
                            />
                            <span>Account Setting</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="logout" className="dropdown-link"
                              onClick={() => setIsOpen(false)}>
                            <LogOut
                              size={20}
                              className="icons-from-dropdown"
                            />
                            <span>Log Out</span>
                        </Link>
                      </li>
                    </>
                  )
                  : 
                  (
                    <>
                      <li>
                        <Link to="signin"  className="dropdown-link"
                        onClick={() => setIsOpen(false)} 
                        >
                            <LogIn
                              size={20}
                              className="icons-from-dropdown"
                            />
                            <span>Sign In</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/signup" className="dropdown-link"
                        onClick={() => setIsOpen(false)}
                        >
                            < UserPlus
                              size={20}
                              className="icons-from-dropdown"
                            />
                            <span>Sign Up</span>
                        </Link>
                      </li>
                    </>
                  )
                }
              </ul>
            )}
          </div>

        <div className="menu-box" >         
            <Menu size={22} className="menu-btn" onClick={handleToggleMenu}/>
        </div>

        {isOpenMenu && 
             <div className="menu-box-group">
                  <div className="pages-group">
                      <h2>Your Pages.</h2>
                  </div>
                  <div className="close-box">
                      <X size={22} className="colse-icon" onClick={handleToggleMenu}/>
                  </div>

                  <ul className="list-links">
                      <li>
                          <Link to="/" className="link" onClick={() => setIsOpenMenu(false)}>Home</Link>
                      </li>
                      <li>
                          <Link to="/products" className="link" onClick={() => setIsOpenMenu(false)}>Products</Link>
                      </li>
                      <li>
                          <Link to="/about" className="link" onClick={() => setIsOpenMenu(false)}>About</Link>
                      </li>
                      <li>
                          <Link to="/contact" className="link" onClick={() => setIsOpenMenu(false)}>Contact</Link>
                      </li>
                  </ul>

                  <div className="search-box" onSubmit={handleSearchSubmit}>
                    <Search size="14px" />
                    <input type="text" 
                     value={search}
                     onChange={(e) => setSearch(e.target.value)}
                     onKeyDown={(e) => {
                        if(e.key === "Enter"){
                            navigate("/products");
                            setIsOpenMenu(false);
                        }
                    }}
                    placeholder="Search..." style={{zIndex: "1001"}}/>
                  </div>
             </div>
        }
       
      </div>
       
    </div>
  );
};

export default Navbar;
