import axios from "axios";
import { vocabulariesFetched } from "./slice";
import { apiUrl } from "../../config/constants";
import { selectToken } from "../user/selectors";

export const fetchVocabularies = async (dispatch, getState) => {
  const token = selectToken(getState());
  if (token === null) return;
  try {
    const response = await axios.get(`${apiUrl}/vocabularies`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const vocabularies = response.data;
    dispatch(vocabulariesFetched(vocabularies));
  } catch (e) {
    console.log(e.message);
  }
};
