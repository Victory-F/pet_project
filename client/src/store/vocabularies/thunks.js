import axios from "axios";
import {
  updateVocabulariesAdd,
  vocabulariesFetched,
  vocabularyFetched,
} from "./slice";
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

export const fetchVocabulary = (vocabularyId) => async (dispatch, getState) => {
  const token = selectToken(getState());
  if (token === null) return;
  try {
    const response = await axios.get(`${apiUrl}/vocabularies/${vocabularyId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const vocabulary = response.data;
    dispatch(vocabularyFetched(vocabulary));
  } catch (e) {
    console.log(e.message);
  }
};

export const addVocabulary = (title, language) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    if (token === null) return;
    try {
      const response = await axios.post(
        `${apiUrl}/vocabularies`,
        {
          title,
          language,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(updateVocabulariesAdd(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};
