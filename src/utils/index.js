import axios from "axios";

export const getSynonyms = async (value, setter) => {
  try {
    const synonymsArr = await axios.get(
      `https://api.datamuse.com/words?rel_syn=${value}`
    );

    if (synonymsArr && synonymsArr.data.length) setter(synonymsArr.data);
    else setter([]);
  } catch (error) {
    console.log("Get synonyms error: ", error);
    setter([]);
  }
};

export const removePunctuation = value =>
  value.replace(/[.,?/#!$%^&*;:{}=\-_`~()]/g, "");
