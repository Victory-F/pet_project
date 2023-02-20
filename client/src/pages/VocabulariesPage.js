import { useDispatch, useSelector } from "react-redux";
import { selectVocabularies } from "../store/vocabularies/selectors";
import { selectToken } from "../store/user/selectors";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  addVocabulary,
  fetchVocabularies,
  fetchVocabulary,
} from "../store/vocabularies/thunks";

export const VocabulariesPage = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchVocabularies);
  }, [dispatch]);
  const vocabularies = useSelector(selectVocabularies);

  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");

  const addVocabularyForm = (e) => {
    e.preventDefault();

    dispatch(addVocabulary(title, language));
  };
  return (
    token && (
      <div>
        <h1>VocabulariesPage</h1>
        {vocabularies &&
          vocabularies.map((v) => (
            <div key={v.id}>
              <h2>{v.title}</h2>{" "}
              <button
                onClick={() => {
                  dispatch(fetchVocabulary(v.id));
                  navigate("/vocabulary");
                }}
              >
                Open Vocabulary
              </button>
            </div>
          ))}
        <br />
        <form onSubmit={addVocabularyForm}>
          Add a Vocabulary
          <br />
          <input
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <br />
          <input
            placeholder="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            required
          />
          <br />
          <button type="submit">Create Vocabulary</button>
        </form>
      </div>
    )
  );
};
