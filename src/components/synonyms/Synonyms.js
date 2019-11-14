import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getSynonyms } from "../../utils";

const Synonyms = ({ activeData, selectSynonym }) => {
  const [synonyms, setSynonyms] = useState([]);
  useEffect(() => {
    getSynonyms(activeData.value, setSynonyms);
  }, [activeData]);

  return (
    <>
      <label htmlFor="selectSynonym">Synonyms</label>{" "}
      <select
        id="selectSynonym"
        onChange={e => selectSynonym(e.target.value)}
        value={activeData.value}
      >
        <option value={activeData.value}>{activeData.value}</option>
        {synonyms.slice(0, 10).map(el => (
          <option key={el.word} value={el.word}>
            {el.word}
          </option>
        ))}
      </select>
    </>
  );
};

Text.propTypes = {
  activeData: PropTypes.object,
  selectSynonym: PropTypes.func
};

export default Synonyms;
