import { useDispatch, useSelector } from "react-redux";
import { selectVocabularies } from "../store/vocabularies/selectors";
import { selectToken } from "../store/user/selectors";
import { useEffect } from "react";
import { fetchVocabularies } from "../store/vocabularies/thunks";

export const VocabulariesPage = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVocabularies);
  }, [dispatch]);
  const vocabularies = useSelector(selectVocabularies);

  return (
    token && (
      <div>
        <h1>VocabulariesPage</h1>
        {vocabularies && vocabularies.map((v) => <h2>{v.title}</h2>)}
      </div>
    )
  );
};
