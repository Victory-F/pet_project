import { useDispatch, useSelector } from "react-redux";
import { selectVocabularies } from "../store/vocabularies/selectors";
import { selectToken } from "../store/user/selectors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
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
      </div>
    )
  );
};
