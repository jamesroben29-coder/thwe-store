import React from "react";
import { Link } from "react-router-dom";
import { CircleCheckBig } from "lucide-react";
const Thank = () => {
  return (
    <div className="thank-container">
      <div className="thank-page">

        <div className="thank-check-mark-icon">
          <CircleCheckBig
            size={70}
            color="var(--success)"
          />
        </div>

        <h1>Thank You!</h1>

        <p>
          Your order has been placed successfully.
        </p>

        <div className="thank-btn-group">

          <Link to="/products">
            <button>
              Go To Shopping
            </button>
          </Link>

          <Link to="/">
            <button>
              Go To Home
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Thank;