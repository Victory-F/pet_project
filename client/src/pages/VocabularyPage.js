import { useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
import { selectVocabulary } from "../store/vocabularies/selectors";

export const VocabularyPage = () => {
  const token = useSelector(selectToken);

  const vocabulary = useSelector(selectVocabulary);
  const message = new SpeechSynthesisUtterance();

  const speechHandler = (message, word) => {
    message.text = word;
    message.lang = "nl";
    window.speechSynthesis.speak(message);
  };

  return (
    token && (
      <div>
        <p>strooplikkerij</p>
        <button onClick={() => speechHandler(message, "strooplikkerij")}>
          click
        </button>
        <h1>Vocabulary Page</h1>
        {vocabulary &&
          vocabulary.map((w) => (
            <div key={w.id}>
              <p>{w.foreign}</p>

              <p>{w.native}</p>
              <button onClick={() => speechHandler(message, w.foreign)}>
                SPEAK
              </button>
              <h3>{w.category.title}</h3>
              <br />
            </div>
          ))}
      </div>
    )
  );
};
