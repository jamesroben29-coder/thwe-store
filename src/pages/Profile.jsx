import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useWishlist } from "../context/useWishlist";

import {
  UserRound, Mail, Phone, MapPin, Pencil,
  ShoppingBag, Heart, ShoppingCart,
} from "lucide-react";

import { useCart } from "../context/useCart";


const Profile = () => {

  const { cartItems, orders } = useCart();

  const { currentUser,setCurrentUser  } = useAuth();

  const { wishlistItems } = useWishlist();

  const [editProfile, setEditProfile] = useState(false);

  const [editDatas, setEditDatas] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleEditProfile = (e) => {
    const { name, value } = e.target;

    setEditDatas({
      ...editDatas,
      [name]: value
    });
  };

  const handleSaved = (e) => {
    e.preventDefault();

    setCurrentUser(prevUser => ({ ...prevUser , ...editDatas}));
    setEditProfile(false);
  }


  return (
    <main className="profile-page">

      <section className="profile-container">

        <div className="profile-header">

          <div className="profile-avatar">
            <UserRound size={42} />
          </div>

          <div className="profile-info">
            <h1>User Name</h1>
            <p>{currentUser?.name}</p>
          </div>

          <button
            className="edit-profile-btn"
            onClick={() => {
            setEditDatas({
              name: currentUser?.name || "",
              email: currentUser?.email || "",
              phone: currentUser?.phone || "",
              address: currentUser?.address || "",
            });
            setEditProfile(true);
          }}
          >
            <Pencil size={17} />
            Edit Profile
          </button>

        </div>

        <div className="profile-section overview-section">
          <div className="section-title">
            <h2>Account Overview</h2>
            <p>A quick look at your account activity</p>
          </div>

          <div className="overview-cards">
            <div className="overview-card">
              <div className="overview-icon">
                <ShoppingBag size={22} />
              </div>
              <div className="overview-content">
                <span>Total Orders</span>
                <strong>{orders.length}</strong>
              </div>
            </div>

            <div className="overview-card">
              <div className="overview-icon">
                <Heart size={22} />
              </div>
              <div className="overview-content">
                <span>Wishlist</span>
                <strong>{wishlistItems.length}</strong>
              </div>

            </div>

            <div className="overview-card">
              <div className="overview-icon">
                <ShoppingCart size={22} />
              </div>
              <div className="overview-content">
                <span>Cart Items</span>
                <strong>{totalQuantity}</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-section">

          <div className="section-title">
            <h2>Personal Information</h2>
            <p>Your account information</p>
          </div>


          {editProfile ? (

            <div className="edit-input-box">
              <form className="edit-form-box" onSubmit={handleSaved}>
                <label>
                  Edit Name
                  <input
                    type="text"
                    name="name"
                    value={editDatas.name}
                    onChange={handleEditProfile}
                    placeholder="Full name"
                  />

                </label>

                <label>
                  Edit Email
                  <input
                    type="text"
                    name="email"
                    value={editDatas.email}
                    onChange={handleEditProfile}
                    placeholder="Email address"
                  />

                </label>


                <label>
                  Edit Phone

                  <input
                    type="text"
                    name="phone"
                    value={editDatas.phone}
                    onChange={handleEditProfile}
                    placeholder="Phone number"
                  />

                </label>


                <label>
                  Edit Address

                  <input
                    type="text"
                    name="address"
                    value={editDatas.address}
                    onChange={handleEditProfile}
                    placeholder="Address"
                  />

                </label>


                <div className="edit-save-cancel-box">

                  <button type="button" onClick={() => setEditProfile(false)}
                  >
                    Cancel
                  </button>

                  <button type="submit">
                    Save Edit
                  </button>

                </div>

              </form>

            </div>

          ) : (

            /* Normal Profile Mode */

            <div className="profile-details">

              <div className="profile-detail">

                <UserRound size={20} />

                <div>
                  <span>Full Name</span>
                  <strong>{currentUser?.name}</strong>
                </div>

              </div>


              <div className="profile-detail">

                <Mail size={20} />

                <div>
                  <span>Email</span>
                  <strong>{currentUser?.email}</strong>
                </div>

              </div>


              <div className="profile-detail">

                <Phone size={20} />

                <div>
                  <span>Phone</span>
                  <strong>+{currentUser?.phone}</strong>
                </div>

              </div>


              <div className="profile-detail">

                <MapPin size={20} />

                <div>
                  <span>Address</span>
                  <strong>{currentUser?.address}</strong>
                </div>

              </div>

            </div>

          )}

        </div>

      </section>

    </main>
  );
};


export default Profile;