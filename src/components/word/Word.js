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

Word.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    isBold: PropTypes.bool,
    isItalic: PropTypes.bool,
    isUnderline: PropTypes.bool,
    color: PropTypes.string,
  }),
  showPopup: PropTypes.func
};

export default Word;
