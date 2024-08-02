import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <>
      <Steps />
      <StepMessage step={1}>
        <p>Passing content</p>
        <p>🏃🏽‍♂️</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read children prop</p>
        <p>👶🏽</p>
      </StepMessage>
    </>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }
  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <main className="steps">
          <section className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </section>

          <StepMessage step={step}>
            {messages[step - 1]}
            <span className="buttons">
              <Button
                textColor="#fff"
                bgColor="#23f8"
                onClick={() => alert(`${messages[step - 1]}`)}
              >
                What should i do?
              </Button>
            </span>
          </StepMessage>

          <section className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <span>👈🏽</span>Previous
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next <span>👉🏽</span>
            </Button>
          </section>
        </main>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Steps {step}:</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
