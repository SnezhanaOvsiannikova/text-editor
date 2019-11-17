import React from "react";
import PropTypes from "prop-types";
import Synonyms from "../synonyms/Synonyms";
import "./style.css";

const Popup = ({ activeData, showPopup, setStyles, selectSynonym }) => {
  return (
    <div className="popup">
      <i className="fa fa-close" onClick={() => showPopup(false)}></i>
      <button
        className={`btn ${activeData.isBold ? "active" : " "}`}
        onClick={() => setStyles("isBold")}
      >
        B
      </button>
      <button
        className={`btn ${activeData.isItalic ? "active" : " "}`}
        onClick={() => setStyles("isItalic")}
      >
        I
      </button>
      <button
        className={`btn ${activeData.isUnderline ? "active" : " "}`}
        onClick={() => setStyles("isUnderline")}
      >
        U
      </button>
      <label htmlFor="selectColor">Choose color</label>{" "}
      <select
        id="selectColor"
        onChange={e => setStyles(null, e.target.value)}
        value={activeData.color || "select"}
      >
        <option value="select">Select</option>
        <option value="#4f34eb">Blue</option>
        <option value="#21b021">Green</option>
        <option value="#e5f50c">Yellow</option>
      </select>{" "}
      <Synonyms activeData={activeData} selectSynonym={selectSynonym} />
    </div>
  );
};

Text.propTypes = {
  activeData: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    isBold: PropTypes.bool,
    isItalic: PropTypes.bool,
    isUnderline: PropTypes.bool,
    color: PropTypes.string,
  }),
  setStyles: PropTypes.func,
  showPopup: PropTypes.func,
  selectSynonym: PropTypes.func
};

export default Popup;
