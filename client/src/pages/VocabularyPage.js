import { useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
import { selectVocabulary } from "../store/vocabularies/selectors";

export const VocabularyPage = () => {
  const token = useSelector(selectToken);

  const vocabulary = useSelector(selectVocabulary);
  console.log(vocabulary);
  return (
    token && (
      <div>
        <h1>Vocabulary Page</h1>
        {vocabulary &&
          vocabulary.map((w) => (
            <div key={w.id}>
              <p>{w.foreign}</p>
              <p>{w.native}</p>
              <h3>{w.category.title}</h3>
              <br />
            </div>
          ))}
      </div>
    )
  );
};
