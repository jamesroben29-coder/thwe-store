import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  CircleAlert,
  X
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [ error , setError ] = useState("");

  const [ formData , setFormData ] = useState({
      email : "",
      password : ""
  });

  const handleInput = (e) => {
      const { name , value } = e.target;
      setFormData({ ...formData, [name] : value });
      setError(false);
  }

  const handleSubmit = (e) => {
      e.preventDefault();

      const success = signIn(formData.email, formData.password);
      if(success){
          navigate("/profile");
      }else{
          setError("Invalid mail and password!");
      }
  }

  const handleClose = () => {
      setError(false);
  }

  return (
    <div className="signin-page">
      <div className="signin-card">
        
        <div className="signin-header">

          <h2>Welcome Back</h2>

          <p>
            Sign in to continue to your account
          </p>
        </div>

      
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="signin-field">
            <label htmlFor="email">
              Email address
            </label>

            <div className="signin-input-wrapper">
              <Mail size={19} />

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInput}
                placeholder="Enter your email"
              />
            </div>
          </div>
          {error && 
          <div className="signin-error-box">
            <CircleAlert className="circle-alret-icon" />
            <X className="x-icon-in-error-box" onClick={() => handleClose(true)}/>
            <div>
              <p>{error}</p>
              <small>Please check your credentials and try again!</small>
            </div>
          </div>
          }
          <div className="signin-field">
            <label htmlFor="password">
              Password
            </label>

            <div className="signin-input-wrapper">
              <Lock size={19} />

              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInput}
                placeholder="Enter your password"
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>
            </div>
          </div>
          <div className="signin-options">
            <Link to="/forgot-password">
              Forgot password?
            </Link>
          </div>

  
          <button
            type="submit"
            className="signin-submit"
          >
            <LogIn size={19} />
            Sign In
          </button>

        </form>

  
        <div className="signin-footer">
          <span>Don't have an account?</span>

          <Link to="/signup">
            Sign Up
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SignIn;