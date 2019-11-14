import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Word = ({ data, showPopup }) => {
  const styles = data.color ? { color: data.color } : {};

  return (
    <span
      className={`${data.isBold ? "bold" : ""} ${
        data.isItalic ? "italic" : ""
      } ${data.isUnderline ? "underline" : ""}`}
      style={styles}
      onDoubleClick={showPopup}
    >
      {data.value}{" "}
    </span>
  );
};

Text.propTypes = {
  data: PropTypes.object,
  showPopup: PropTypes.func
};

export default Word;
