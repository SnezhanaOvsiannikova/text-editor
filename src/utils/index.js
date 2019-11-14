import axios from "axios";

export const getSynonyms = async (value, setter) => {
  try {
    const synonymsArr = await axios.get(
      `https://api.datamuse.com/words?ml=${value}`
    );

    if (synonymsArr && synonymsArr.data.length) setter(synonymsArr.data);
  } catch (error) {
    console.log("Get synonyms error: ", error);
  }
};
