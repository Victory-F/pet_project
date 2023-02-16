import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  allVocabularies: [],
  vocabulary: {},
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
      state.vocabulary = {};
      state.loading = false;
    },
  },
});

export const { startLoading, vocabulariesFetched } = vocabulariesSlice.actions;

export default vocabulariesSlice.reducer;
