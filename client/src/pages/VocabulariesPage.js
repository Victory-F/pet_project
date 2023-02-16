import { useSelector } from "react-redux";
import { selectVocabularies } from "../store/vocabularies/selectors";
import { selectToken } from "../store/user/selectors";

export const VocabulariesPage = () => {
  const token = useSelector(selectToken);
  const vocabularies = useSelector(selectVocabularies);

  return (
    token && (
      <div>
        <h1>VocabulariesPage</h1>
        {vocabularies.map((v) => (
          <h2>{v.title}</h2>
        ))}
      </div>
    )
  );
};
