import { useAuth } from "../context/AuthContext";
import React ,{ useEffect, useState } from "react";

import {
  User, Mail, Phone,
  MapPin, Settings, LockKeyhole, Eye,
  Save, CircleUserRound, ShoppingBag, Heart, LogOut, EyeOff,
} from "lucide-react";


const AccountSetting = () => {

  const { currentUser, setCurrentUser } = useAuth();
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      address: "",
    });

    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {

      if(currentUser){
          setFormData({
            name : currentUser.name || "",
            email : currentUser.email || "",
            phone : currentUser.phone || "",
            address : currentUser.address || "",
          });
      }

    },[currentUser]);

    const handleInputSet = (e) => {
        const { name , value } = e.target;
        setFormData({ ...formData, [name] : value });
    }

    const handlePasswordUpdate = () => {
      if (passwordData.currentPassword !== currentUser.password) {
        alert("Current password is incorrect!");
        return;
      }


      if (passwordData.newPassword !== passwordData.confirmPassword) {
        alert("New password and confirm password do not match!");
        return;
      }

      if (passwordData.newPassword.length < 8) {
        alert("Password must be at least 8 characters!");
        return;
      }

      const updatedUser = {
        ...currentUser,
        password: passwordData.newPassword,
      };


      setCurrentUser(updatedUser);

      const registeredUsers =
        JSON.parse(localStorage.getItem("registeredUsers")) || [];

      const updatedUsers = registeredUsers.map((user) =>
        user.id === currentUser.id
          ? { ...user, password: passwordData.newPassword }
          : user
      );

      localStorage.setItem(
        "registeredUsers",
        JSON.stringify(updatedUsers)
      );

      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      alert("Password updated successfully!");
    };


    const handlePasswordInput = (e) => {
      const { name, value } = e.target;

      setPasswordData({
        ...passwordData, [name]: value,
      });
    };

    const handleSaveChanges = () =>{
        const updatedUser = {
            ...currentUser, ...formData,
        };

        setCurrentUser(updatedUser);

        const registeredUsers = 
        JSON.parse(localStorage.getItem("registeredUsers")) || [];
    
        const updatedUsers = registeredUsers.map((user) => 
          user.id === currentUser.id ? updatedUser : user
        );

        localStorage.setItem(
          "registeredUsers",
          JSON.stringify(updatedUsers)
        );
      }

    const [passwordData, setPasswordData] = useState({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

  return (
    <main className="account-setting-page">

      <section className="account-setting-header">
        <div className="account-setting-container">
          <div className="account-breadcrumb">
            <span>Home</span>
            <span>›</span>
            <span>Account Settings</span>
          </div>

          <h1>Account Settings</h1>
          <p>Manage your account information and security</p>
        </div>
      </section>

      <section className="account-setting-content">
        <div className="account-setting-container account-setting-layout">

          <aside className="account-sidebar">

            <div className="account-sidebar-user">
              <div className="account-sidebar-avatar">
                <User size={28} />
              </div>

              <div>
                <h3>Mrauk U</h3>
                <p>thwet hwe1@gmail.com</p>
              </div>
            </div>

            <nav className="account-sidebar-nav">

              <a href="/profile">
                <CircleUserRound size={21} />
                <span>My Profile</span>
              </a>

              <a href="/orderhistory">
                <ShoppingBag size={21} />
                <span>Order History</span>
              </a>

              <a href="/wishlist">
                <Heart size={21} />
                <span>Wishlist</span>
              </a>

              <a href="/setting" className="active">
                <Settings size={21} />
                <span>Account Settings</span>
              </a>

              <a href="/logout">
                <LogOut size={21} />
                <span>Log Out</span>
              </a>

            </nav>

          </aside>

          <div className="account-setting-main">
            <section className="setting-card">

              <div className="setting-card-header">
                <div className="setting-title-icon">
                  <User size={23} />
                </div>

                <div>
                  <h2>Personal Information</h2>
                  <p>Update your personal details</p>
                </div>
              </div>

              <div className="setting-form-grid">
                <div className="setting-field">
                  <label htmlFor="fullName">Full Name</label>

                  <div className="setting-input-wrapper">
                    <User size={19} />

                    <input
                      id="fullName"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputSet}
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>


                <div className="setting-field">
                  <label htmlFor="email">Email Address</label>

                  <div className="setting-input-wrapper">
                    <Mail size={19} />

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputSet}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>


                <div className="setting-field">
                  <label htmlFor="phone">Phone Number</label>

                  <div className="setting-input-wrapper">
                    <Phone size={19} />

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputSet}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>


                <div className="setting-field">
                  <label htmlFor="address">Address</label>

                  <div className="setting-input-wrapper">
                    <MapPin size={19} />

                    <input
                      id="address"
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputSet}
                      placeholder="Enter your address"
                    />
                  </div>
                </div>

              </div>


              <div className="setting-action">
                <button className="setting-primary-btn" onClick={handleSaveChanges}>
                  <Save size={18} />
                  Save Changes
                </button>
              </div>

            </section>

            <section className="setting-card password-card">

              <div className="setting-card-header">
                <div className="setting-title-icon">
                  <LockKeyhole size={23} />
                </div>

                <div>
                  <h2>Change Password</h2>
                  <p>Keep your account secure with a new password.</p>
                </div>
              </div>


              <div className="password-form">

                <div className="setting-field">
                  <label htmlFor="currentPassword">
                    Current Password
                  </label>

                  <div className="setting-input-wrapper">
                    <LockKeyhole size={19} />

                    <input
                      id="currentPassword"
                      type={showCurrentPassword ? "text" : "password"}
                      placeholder="Enter your current password"
                      name="currentPassword"
                      value={passwordData.currentPassword}
                      onChange={handlePasswordInput}
                    />

                    <button
                      type="button" onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      className="password-eye-btn"
                    >
                      {showCurrentPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                    </button>
                  </div>
                </div>


                <div className="setting-field">
                  <label htmlFor="newPassword">
                    New Password
                  </label>

                  <div className="setting-input-wrapper">
                    <LockKeyhole size={19} />

                    <input
                      id="newPassword"
                      type={showNewPassword ? "text" : "password"}
                      placeholder="Enter your new password"
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={handlePasswordInput}
                    />

                    <button
                      type="button" 
                      className="password-eye-btn" onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                    </button>
                  </div>
                </div>


                <div className="setting-field">
                  <label htmlFor="confirmPassword">
                    Confirm New Password
                  </label>

                  <div className="setting-input-wrapper">
                    <LockKeyhole size={19} />

                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your new password"
                      name="confirmPassword"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordInput}
                    />

                    <button
                      type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="password-eye-btn"
                    >
                      {showConfirmPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                    </button>
                  </div>
                </div>

              </div>


              <div className="setting-action">
                <button className="setting-primary-btn" onClick={handlePasswordUpdate}>
                  <LockKeyhole size={18} />
                  Update Password
                </button>
              </div>

            </section>

          </div>

        </div>
      </section>

    </main>
  );
};

export default AccountSetting;