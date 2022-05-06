import React from "react";
import actions from "../actions";

const AddDigit = ({ className = "", dispatch, digit }) => {
  return (
    <button
      type="button"
      onClick={() => dispatch({ type: actions.ADD_DIGIT, payload: { digit } })}
      className={`focus:outline-none flex items-center justify-center bg-white bg-opacity-10 shadow-sm rounded-md py-2 px-2 sm:px-4 h-16 hover:bg-opacity-25 transition duration-150 ease-in-out focus:bg-opacity-25 ${className}`}
    >
      <span>{digit}</span>
    </button>
  );
};

export default AddDigit;
