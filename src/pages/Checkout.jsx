import React, { useState } from "react";
import { Truck, Package, Ticket, LockKeyhole } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Checkout = () => {
  const { cartItems, addOrder, setCartItems } = useCart();
  const navigate = useNavigate();
  const { setCurrentUser } = useAuth();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    state: "",
    zip: "",
    shippingMethod: "delivery",
    terms: false,
  });

  const [errors, setErrors] = useState({});


  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [discountMessage, setDiscountMessage] = useState("");


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Remove error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleShippingMethod = (method) => {
    setFormData((prev) => ({
      ...prev,
      shippingMethod: method,
    }));

    setErrors((prev) => ({
      ...prev,
      shippingMethod: "",
    }));
  };


  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryShipping =
    subTotal >= 2500
      ? 0
      : subTotal < 500
        ? 15
        : subTotal < 1000
          ? 10
          : subTotal < 1500
            ? 5
            : 3;

  const shipping =
    formData.shippingMethod === "pickup"
      ? 0
      : deliveryShipping;

  const totalPrice = Math.max(
    0,
    subTotal + shipping - discount
  );


  const handleApplyDiscount = () => {
    const code = discountCode.trim().toUpperCase();

    if (!code) {
      setDiscountMessage("Please enter a discount code.");
      setDiscount(0);
      return;
    }

    if (code === "SAVE10") {
      const discountAmount = subTotal * 0.1;

      setDiscount(discountAmount);
      setDiscountMessage("10% discount applied.");
      return;
    }

    if (code === "SAVE20") {
      const discountAmount = subTotal * 0.2;

      setDiscount(discountAmount);
      setDiscountMessage("20% discount applied.");
      return;
    }

    setDiscount(0);
    setDiscountMessage("Invalid discount code.");
  };

  const validateForm = () => {
    const newErrors = {};

    // Full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters.";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (
      !/^[0-9+\-\s()]{7,20}$/.test(formData.phone)
    ) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    // Country
    if (!formData.country.trim()) {
      newErrors.country = "Country is required.";
    }

    // City
    if (!formData.city.trim()) {
      newErrors.city = "City is required.";
    }

    // State
    if (!formData.state.trim()) {
      newErrors.state = "State is required.";
    }

    // ZIP
    if (!formData.zip.trim()) {
      newErrors.zip = "ZIP code is required.";
    } else if (!/^[0-9A-Za-z\s-]{3,10}$/.test(formData.zip)) {
      newErrors.zip = "Please enter a valid ZIP code.";
    }

    // Shipping method
    if (!formData.shippingMethod) {
      newErrors.shippingMethod = "Please select a shipping method.";
    }

    // Terms
    if (!formData.terms) {
      newErrors.terms = "You must agree to the Terms and Conditions.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
      e.preventDefault();

      if (cartItems.length === 0) {
        alert("Your cart is empty.");
        return;
      }

      const isValid = validateForm();

      if (!isValid) {
        return;
      }

      const newOrder = {
        id: Date.now(),
        date: new Date().toISOString(),
        status: "Delivered",
        items: [...cartItems],

        customer: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          city: formData.city,
          state: formData.state,
          zip: formData.zip,
          shippingMethod: formData.shippingMethod,
        },

        summary: {
          totalItems: cartItems.reduce(
            (total, item) => total + item.quantity,
            0
          ),
          subTotal,
          shipping,
          discount,
          total: totalPrice,
        },
      };

      setCurrentUser((prevUser) => ({
        ...prevUser,
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: `${formData.city}, ${formData.state}, ${formData.country}, ${formData.zip}`,
      }));

      addOrder(newOrder);
      setCartItems([]);

      navigate("/thank");
      
    };


  return (
    <div className="checkout-container">

      <h2>Checkout Page</h2>

      <div className="checkout-inner-box">

        <div className="checkout-left-box">
          <h4>Shipping Information</h4>

          <div className="shipping-delivery-info-box">
            <div
              className={`del-ship-box ${
                formData.shippingMethod === "delivery"
                  ? "active"
                  : ""
              }`}
              onClick={() => handleShippingMethod("delivery")}
            >
              <input
                type="radio"
                name="shippingMethod"
                value="delivery"
                checked={formData.shippingMethod === "delivery"}
                onChange={() =>
                  handleShippingMethod("delivery")
                }
              />

              <Truck size={24} />
              <small className="delivery-text">Delivery</small>
            </div>

            <div
              className={`del-ship-box ${
                formData.shippingMethod === "pickup"
                  ? "active"
                  : ""
              }`}
              onClick={() => handleShippingMethod("pickup")}
            >
              <input
                type="radio"
                name="shippingMethod"
                value="pickup"
                checked={formData.shippingMethod === "pickup"}
                onChange={() =>
                  handleShippingMethod("pickup")
                }
              />
              <Package size={24} />
              <small className="pickage-text">Pick up</small>

            </div>

          </div>

          {errors.shippingMethod && (
            <p className="form-error">
              {errors.shippingMethod}
            </p>
          )}

          <form onSubmit={handleSubmit}>

            <label>Full name*
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
                className={errors.fullName ? "input-error" : ""}
              />
              {errors.fullName && (
                <span className="form-error">
                  {errors.fullName}
                </span>
              )}
            </label>

            <label>Email address*
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && (
                <span className="form-error">
                  {errors.email}
                </span>
              )}
            </label>

            <label>Phone number*
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className={errors.phone ? "input-error" : ""}
              />
              {errors.phone && (
                <span className="form-error">
                  {errors.phone}
                </span>
              )}
            </label>


            <label>Country*
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter country"
                className={errors.country ? "input-error" : ""}
              />
              {errors.country && (
                <span className="form-error">
                  {errors.country}
                </span>
              )}
            </label>

            <div className="city-state-zip">
              <label>City*
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                  className={errors.city ? "input-error" : ""}
                />

                {errors.city && (
                  <span className="form-error">
                    {errors.city}
                  </span>
                )}
              </label>

              <label>State*
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Enter state"
                  className={errors.state ? "input-error" : ""}
                />

                {errors.state && (
                  <span className="form-error">
                    {errors.state}
                  </span>
                )}
              </label>

              <label> ZIP code*
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  placeholder="Enter ZIP code"
                  className={errors.zip ? "input-error" : ""}
                />
                {errors.zip && (
                  <span className="form-error">
                    {errors.zip}
                  </span>
                )}
              </label>
            </div>

            <div className="check-agree-box">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
              />
              <p className="check-agree-text">
                I have read and agree{" "}
                <span>Terms and Conditions</span>
              </p>
            </div>

            {errors.terms && (
              <p className="form-error">
                {errors.terms}
              </p>
            )}
          </form>
        </div>



        <div className="checkout-right-box">
          <h4>Review Your Cart</h4>

          <div className="checkout-product-list">
            {cartItems.length === 0 ? (
              <div className="empty-checkout-cart">
                <h3>Not Any Cart Items!</h3>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  className="checkout-product-item-box"
                  key={item.id}
                >
                  <div className="item-left-group">
                    <div className="checkout-img-box">
                      <img
                        src={item.image}
                        alt={item.name}
                        width="80"
                        height="60"
                      />
                    </div>

                    <div className="checkout-product-info">
                      <span>{item.name}</span>
                      <small>{item.category}</small>

                    </div>
                  </div>
                  <div className="checkout-item-texts">
                    <p>
                      {item.quantity} x
                    </p>
                    <p>
                      $
                      {(
                        item.price * item.quantity
                      ).toFixed(2)}
                    </p>

                  </div>
                </div>
              ))
            )}
          </div>

          <div className="checkout-discount-box">
            <div className="ticket-dis-code-box">
              <Ticket size={20} />
              <input
                type="text"
                value={discountCode}
                onChange={(e) =>
                  setDiscountCode(e.target.value)
                }
                placeholder="Discount Code"
              />
            </div>
            <button
              type="button"
              className="apply-text"
              onClick={handleApplyDiscount}
            >
              Apply
            </button>
          </div>
          {discountMessage && (
            <p
              className={`discount-message ${
                discount > 0
                  ? "success-message"
                  : "error-message"
              }`}
            >
              {discountMessage}
            </p>
          )}

          <div className="checkout-price-group">
            <div>
              <span>Subtotal</span>
              <span>
                ${subTotal.toFixed(2)}
              </span>
            </div>

            <div>
              <span>Shipping</span>
              <span className={shipping === 0 ? "free" : ""}>
                {shipping === 0
                  ? "Free"
                  : `$${shipping.toFixed(2)}`
                }
              </span>
            </div>

            <div>
              <span>Discount</span>
              <span className="discount-price">
                -${discount.toFixed(2)}
              </span>
            </div>

            <div className="total-border">
              <span>Total</span>
              <span className="total-price">
                ${totalPrice.toFixed(2)}
              </span>

            </div>
          </div>

          <button
            type="button"
            className="pay-btn"
            onClick={handleSubmit}
            disabled={cartItems.length === 0}
          >
            {cartItems.length === 0
              ? "Cart is Empty"
              : "Pay Now"
            }
          </button>

          <div className="checkout-secure-box">
            <div className="lock-text-box">
              <LockKeyhole size={22} />
              <h3>
                Secure Checkout - SSL Encrypted
              </h3>
            </div>
            <p>
              Ensuring your financial and personal
              details are secure during every transaction.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;