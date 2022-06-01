import React from "react";
import image from "../images/balchhi-icon.jpg";
import InstagramFillIcon from "remixicon-react/InstagramFillIcon";
import FacebookBoxFillIcon from "remixicon-react/FacebookBoxFillIcon";

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="icons">
        <a href="https://www.facebook.com/Balchhireosrt">
          <i class="ri-facebook-fill"></i>
        </a>
        <a href="https://www.instagram.com/balchhiresort/">
          <i class="ri-instagram-line"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
