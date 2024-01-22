// import React from "react";
import PropTypes from "prop-types";

const Imghover = ({ color, ...props }) => {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill={color}
      {...props}
      xmlns="http://www.w3.org/2000/svg">
      {/* <rect width="96" height="96" rx="48" fill="#854DFF" /> */}
      <path
        d="M26 48.0189C33.3333 47.6859 48 51.6158 48 70"
        stroke="white"
        strokeWidth="2"
      />
      <path d="M48 70V26" stroke="white" strokeWidth="2" />
      <path
        d="M70 48.0189C62.6667 47.6859 48 51.6158 48 70"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
};

Imghover.propTypes = {
  color: PropTypes.string.isRequired,
  //   hoverColor: PropTypes.string.isRequired,
  // Add any other prop types as needed
};

const Imgover = () => {
  return (
    <div className="text-[#854DFF] hover:text-black">
      <Imgover
        color="#854DFF"
        hoverColor="black"
        width="96"
        height="96"
        viewBox="0 0 96 96"
      />
    </div>
  );
};

export default Imgover;
