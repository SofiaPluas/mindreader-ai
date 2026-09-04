import { useState } from "react";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("home");
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    "¿Puedes tocar lo que estás pensando?",
    "¿Es algo que normalmente puedes encontrar en casa?",
    "¿Es algo que tiene vida?"
  ];

  const answerQuestion = (answer) => {
    const newAnswers = [...answers, answer];

    setAnswers(newAnswers);

    if (question < questions.length - 1) {
      setQuestion(question + 1);
    } else {
      setScreen("result");
    }
  };

  const startScan = () => {
    setScreen("scan");

    setTimeout(() => {
      setScreen("questions");
    }, 3000);
  };

  const restart = () => {
    setScreen("home");
    setQuestion(0);
    setAnswers([]);
  };

  const getResult = () => {
    const [touchable, atHome, alive] = answers;

    if (alive === "yes") {
      if (touchable === "yes") {
        return {
          icon: "🐱",
          name: "UN GATO",
          confidence: "94%"
        };
      }

      return {
        icon: "🌳",
        name: "UN ÁRBOL",
        confidence: "86%"
      };
    }

    if (atHome === "yes") {
      if (touchable === "yes") {
        return {
          icon: "📱",
          name: "UN TELÉFONO",
          confidence: "91%"
        };
      }

      return {
        icon: "💻",
        name: "UNA COMPUTADORA",
        confidence: "84%"
      };
    }

    if (touchable === "yes") {
      return {
        icon: "🍕",
        name: "UNA PIZZA",
        confidence: "82%"
      };
    }

    return {
      icon: "⚽",
      name: "UNA PELOTA",
      confidence: "76%"
    };
  };

  return (
    <main className="app">

      <div className="sparkle sparkle-1">✦</div>
      <div className="sparkle sparkle-2">✦</div>
      <div className="sparkle sparkle-3">✦</div>

      <section className="container">

        {/* PANTALLA PRINCIPAL */}

        {screen === "home" && (
          <>
            <div className="brain-wrapper">
              <div className="brain">💡</div>
              <div className="bubble">👀</div>
            </div>

            <div className="badge">
              ✨ MIND READER 3000
            </div>

            <h1>
              MIND<span>READER</span>
            </h1>

            <p className="subtitle">
              Piensa en algo...
              <br />
              <strong>¡A ver si puedo adivinarlo! 😏</strong>
            </p>

            <button
              className="start-button"
              onClick={startScan}
            >
              🔮 ¡ADIVINA MI MENTE!
            </button>

            <p className="joke">
              🤫 Prometo no hacer trampa...
            </p>
          </>
        )}

        {/* PANTALLA DE ESCANEO */}

        {screen === "scan" && (
          <div className="scan-screen">

            <div className="scan-light">
              💡
            </div>

            <div className="badge">
              🔍 ANALIZANDO...
            </div>

            <h1>
              ESTOY <span>PENSANDO</span>
            </h1>

            <p className="subtitle">
              🤫 Shhh... no cambies de idea.
              <br />
              Estoy intentando descubrirla 👀
            </p>

            <div className="progress">
              <div className="progress-bar"></div>
            </div>

            <p className="scan-text">
              ESCANEANDO TU IDEA...
            </p>

          </div>
        )}

        {/* PANTALLA DE PREGUNTAS */}

        {screen === "questions" && (
          <div className="question-screen">

            <div className="brain-small">
              💡
            </div>

            <div className="badge">
              🧠 PREGUNTA {question + 1} DE {questions.length}
            </div>

            <h2>
              {questions[question]}
            </h2>

            <p className="subtitle">
              Responde sinceramente... 👀
            </p>

            <div className="answers">

              <button
                className="answer yes"
                onClick={() => answerQuestion("yes")}
              >
                😎 SÍ
              </button>

              <button
                className="answer no"
                onClick={() => answerQuestion("no")}
              >
                🙅 NO
              </button>

            </div>

          </div>
        )}

        {/* PANTALLA DE RESULTADO */}

        {screen === "result" && (
          <div className="result-screen">

            <div className="result-icon">
              🎉
            </div>

            <div className="badge">
              ✨ THOUGHT DETECTED
            </div>

            <h1>
              ¡LO <span>DESCUBRÍ!</span>
            </h1>

            <p className="subtitle">
              Bueno... probablemente 😏
              <br />
              Mis poderes mentales son cuestionables.
            </p>

            <div className="result-box">

              <span>MI PREDICCIÓN</span>

              <strong>
                {getResult().icon} {getResult().name}
              </strong>

              <small>
                {getResult().confidence} DE COINCIDENCIA
              </small>

            </div>

            <button
              className="start-button"
              onClick={restart}
            >
              🔄 INTENTAR OTRA VEZ
            </button>

          </div>
        )}

      </section>
    </main>
  );
}

export default App;