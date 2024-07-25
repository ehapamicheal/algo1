import React from "react";
import PropTypes from "prop-types";


const Banners = ({ backgroundImage, text }) => {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="banner-content">
         <h1>{text}</h1>
      </div>
    </div>
  );
};

Banners.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Banners;




