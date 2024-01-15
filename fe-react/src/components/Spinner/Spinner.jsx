import React from "react";
import PropTypes from "prop-types";
import "./Spinner.scss";

const Spinner = ({ isLoading }) => {
  return (
    <div className="spinner-container">
      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        <p>Data loaded successfully!</p>
      )}
    </div>
  );
};

Spinner.propTypes = {
  isLoading: PropTypes.bool,
};

export default Spinner;
