import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getSynonyms, removePunctuation } from "../../utils";

const Synonyms = ({ activeData, selectSynonym }) => {
  const newVal = removePunctuation(activeData.value);
  const [synonyms, setSynonyms] = useState([]);
  useEffect(() => {
    getSynonyms(newVal, setSynonyms);
  }, [activeData, newVal]);

  return (
    <>
      <label htmlFor="selectSynonym">Synonyms</label>{" "}
      <select
        id="selectSynonym"
        onChange={e => selectSynonym(e.target.value)}
        value={newVal}
      >
        <option value={newVal}>{newVal}</option>
        {synonyms.slice(0, 10).map(el => (
          <option key={el.word} value={el.word}>
            {el.word}
          </option>
        ))}
      </select>
    </>
  );
};

Synonyms.propTypes = {
  activeData: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    isBold: PropTypes.bool,
    isItalic: PropTypes.bool,
    isUnderline: PropTypes.bool,
    color: PropTypes.string,
  }),
  selectSynonym: PropTypes.func
};

export default Synonyms;
