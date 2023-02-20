import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  allVocabularies: null,
  vocabulary: null,
};

export const vocabulariesSlice = createSlice({
  name: "vocabularies",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    vocabulariesFetched: (state, action) => {
      state.allVocabularies = action.payload;
      state.vocabulary = null;
      state.loading = false;
    },
    vocabularyFetched: (state, action) => {
      state.vocabulary = action.payload;
      state.loading = false;
    },
    updateVocabulariesAdd: (state, action) => {
      state.allVocabularies = [...state.allVocabularies, action.payload];
    },
  },
});

export const {
  startLoading,
  vocabulariesFetched,
  vocabularyFetched,
  updateVocabulariesAdd,
} = vocabulariesSlice.actions;

export default vocabulariesSlice.reducer;
