// src/About.js

import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import '../assets/css/account.css'

import '../assets/css/main.css'

const MyAccount = () => {
  return (
    <section className=" mt-3">

    <div className="dashboard-container">
       
        <div className="profile-card" >
          <h3 style="color: white;">John Doe</h3>
          <p style="color: white;">You don't have an active subscription</p>
          <a href="subscription.html" className="subscribe-btn">Subscribe now!</a>
        </div>
    
       
        <div className="menu-list">
          <div class="menu-item" onClick="toggleDropdown('manage-devices')">
            <span>Manage Devices</span>
            <span>▼</span>
          </div>
          <div class="dropdown-content" id="manage-devices">
            <p>Manage your connected devices here.</p>
          </div>
    
          <div class="menu-item" onClick="toggleDropdown('account-details')">
            <span>Account Details</span>
            <span>▼</span>
          </div>
          <div class="dropdown-content" id="account-details">
            <p>Update your personal account details.</p>
          </div>
    
          <div class="menu-item" onClick="toggleDropdown('change-password')">
            <span>Change Password</span>
            <span>▼</span>
          </div>
          <div class="dropdown-content" id="change-password">
            <p>Change your password to enhance security.</p>
          </div>
    
          <div class="menu-item" onClick="toggleDropdown('odds-format')">
            <span>Odds Format</span>
            <span>▼</span>
          </div>
          <div class="dropdown-content" id="odds-format">
            <p>Select your preferred odds format.</p>
          </div>
    
          <div class="menu-item" onClick="toggleDropdown('delete-account')">
            <span>Delete Account</span>
            <span>▼</span>
          </div>
          <div class="dropdown-content" id="delete-account">
            <p>Permanently delete your account here.</p>
          </div>
    
          <div class="menu-item" onClick="toggleDropdown('update-timezone')">
            <span>Update Timezone</span>
            <span>▼</span>
          </div>
          <div class="dropdown-content" id="update-timezone">
            <p>Update your current timezone.</p>
          </div>
    
          <div class="menu-item" onClick="toggleDropdown('adjust-timezone')">
            <span>Adjust Timezone</span>
            <span>▼</span>
          </div>
          <div class="dropdown-content" id="adjust-timezone">
            <p>Adjust the timezone htmlFor events.</p>
          </div>
    
          <div class="menu-item" onClick="toggleDropdown('logout')">
            <span>Logout</span>
            <span>▼</span>
          </div>
          <div class="dropdown-content" id="logout">
            <p>Log out of your account safely.</p>
          </div>
        </div>
    </div>



</section>
  );
};

export default MyAccount;
