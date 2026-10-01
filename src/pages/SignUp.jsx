import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
  CircleAlert,
  X
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";

const SignUp = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const symbolCount = formData.password
    .split("")
    .filter((symb) => symb.match(/[^a-zA-Z0-9\s]/)).length;

  const alphabetCount = formData.password
    .split("")
    .filter((alp) => alp.match(/[a-zA-Z]/)).length;

  const numberCount = formData.password
    .split("")
    .filter((num) => num.match(/[0-9]/)).length;

  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setErrorMessage("");
  };

  const toggleEye = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      setErrorMessage("You must have at least 8 characters!");
    } else if (symbolCount < 2) {
      setErrorMessage("You must have at least 2 symbol characters!");
    } else if (numberCount < 3) {
      setErrorMessage("You must have at least 3 number characters!");
    } else if (alphabetCount < 3) {
      setErrorMessage("You must have at least 3 alphabet characters!");
    } else {
      setErrorMessage("");
      signUp(formData);
      navigate("/profile");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">

        <div className="signup-header">
          <h2>Create Your Account</h2>
          <p>Fill in the details below to get started.</p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>

          <div className="signup-field signup-password-field">
            <label htmlFor="name">Full Name</label>

            <div className="signup-input-wrapper">
              <User size={19} />

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInput}
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          <div className="signup-field">
            <label htmlFor="email">Email Address</label>

            <div className="signup-input-wrapper">
              <Mail size={19} />

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInput}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="signup-field">
            <label htmlFor="phone">Phone Number</label>

            <div className="signup-input-wrapper">
              <Phone size={19} />

              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInput}
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          <div className="signup-field">
            <label htmlFor="address">Address</label>

            <div className="signup-input-wrapper">
              <MapPin size={19} />

              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInput}
                placeholder="Enter your address"
                required
              />
            </div>
          </div>

          <div className="signup-field">
            <label htmlFor="password">Password</label>

            <div className="signup-input-wrapper">
              <Lock size={19} />

              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInput}
                placeholder="Create a password"
                required
              />

              <button
                type="button"
                className="signup-password-toggle"
                onClick={toggleEye}
              >
                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>
            </div>

            {errorMessage && (
              <div className="signup-error-box">
                <CircleAlert size={17} />

                <div>
                  <p>{errorMessage}</p>
                  <small>
                    Please check your password requirements.
                  </small>
                </div>

                <X
                  size={17}
                  className="signup-error-close"
                  onClick={() => setErrorMessage("")}
                />
              </div>
            )}
          </div>

          <button type="submit" className="signup-submit">
            <UserPlus size={19} />
            Sign Up
          </button>
        </form>

        <div className="signup-divider">
          <span>OR</span>
        </div>

        <div className="signup-social-group">
          <button type="button">
            <FcGoogle size={19} />
            Continue with Google
          </button>

          <button type="button">
            <FaFacebook size={19} />
            Continue with Facebook
          </button>

          <button type="button">
            <FaApple size={19} />
            Continue with Apple
          </button>
        </div>

        <div className="signup-terms">
          <p>
            By signing up, you agree to our{" "}
            <span>Terms of Service</span> and{" "}
            <span>Privacy Policy</span>.
          </p>
        </div>

        <div className="signup-footer">
          <span>Already have an account?</span>
          <Link to="/signin">Sign In</Link>
        </div>

      </div>
    </div>
  );
};

export default SignUp;