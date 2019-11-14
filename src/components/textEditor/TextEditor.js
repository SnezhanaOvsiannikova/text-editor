import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Word from "../word/Word";
import Popup from "../popup/Popup";

const TextEditor = ({ text }) => {
  const [wordsArray, setWordsArray] = useState([]);
  const [isShowPopup, showPopup] = useState(false);
  const [activeData, setActiveData] = useState(null);

  useEffect(() => {
    const wordsArr = text.split(" ").map((el, i) => {
      let newObj = {};
      newObj.id = i + 1;
      newObj.value = el;
      newObj.isBold = false;
      newObj.isItalic = false;
      newObj.isUnderline = false;
      newObj.color = null;
      return newObj;
    });

    setWordsArray(wordsArr);
  }, [text]);

  const renderWordsList = () => {
    return wordsArray.map(el => (
      <Word
        key={el.id}
        data={el}
        showPopup={() => {
          showPopup(true);
          setActiveData(el);
        }}
      />
    ));
  };
  const setStyles = (key, color) => {
    const newWordsArr = wordsArray.map(el => {
      if (el.value === activeData.value) {
        if (key) el[key] = !el[key];
        if (color) el.color = color;
      }
      return el;
    });

    setWordsArray(newWordsArr);
  };

  const selectSynonym = value => {
    const newWordsArr = wordsArray.map(el => {
      if (el.value === activeData.value) {
        el.value = value;
      }
      return el;
    });

    setWordsArray(newWordsArr);
  };

  return (
    <>
      <div>{renderWordsList()}</div>
      {isShowPopup && (
        <Popup
          activeData={activeData}
          wordsArray={wordsArray}
          showPopup={showPopup}
          setStyles={setStyles}
          selectSynonym={selectSynonym}
        />
      )}
    </>
  );
};

Text.propTypes = {
  text: PropTypes.string
};

export default TextEditor;
