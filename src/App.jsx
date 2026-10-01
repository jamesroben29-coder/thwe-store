import React from 'react'
import { Route , Routes } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from "./pages/Contact.jsx";
import Navbar from './components/Navbar.jsx';
import Footer from './pages/Footer.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Cart from './pages/Cart.jsx';
import Checkout from "./pages/Checkout";
import Thank from './pages/Thank.jsx';
import Profile from "./pages/Profile.jsx";
import Wishlist from './pages/Wishlist.jsx';
import OrderHistory from "./pages/OrderHistory.jsx";
import AccountSetting from "./pages/AccountSetting.jsx"
import Logout from "./pages/Logout.jsx";
import SignUp from './pages/SignUp.jsx';
import SignIn from "./pages/SignIn.jsx";
import ProtectedRoute from './components/ProtectedRoute.jsx';

import OrderDetails from './pages/OrderDetails.jsx';

import "./App.css";

const App = () => {

  return (

    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/products/:id' element={<ProductDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='thank' element={<Thank/>}/>
            
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/orderhistory" element={<OrderHistory />} />
            <Route path="/setting" element={<AccountSetting />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/orderdetails/:id" element={<OrderDetails/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route  path="/signin" element={<SignIn/>} />
            <Route path="/profile" element={
              <ProtectedRoute>
                  <Profile />
              </ProtectedRoute>
            }/>
            
        </Routes>
        <Footer/>
    </div>
  )
}

export default App;