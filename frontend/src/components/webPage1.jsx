import React, { useState } from "react";

const WebPage1 = () => {
  const [showQuiz1, setShowQuiz1] = useState(false);
  const [showQuiz2, setShowQuiz2] = useState(false);
  const [showQuiz3, setShowQuiz3] = useState(false);
  const [showQuiz4, setShowQuiz4] = useState(false);
  const [showQuiz5, setShowQuiz5] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false); 
  const [isApplied, setIsApplied] = useState(false); 
  const [quizAnswers, setQuizAnswers] = useState({
    quiz1: [true, false, false, false],
    quiz2: [false, true, false, false],
    quiz3: [false, false, true, false],
    quiz4: [false, false, false, true],
    quiz5: [false, false, false, true],
  });
  const [userAnswers, setUserAnswers] = useState({
    quiz1: Array(4).fill(false),
    quiz2: Array(4).fill(false),
    quiz3: Array(4).fill(false),
    quiz4: Array(4).fill(false),
    quiz5: Array(4).fill(false),
  });
  const [answerStatus, setAnswerStatus] = useState({
    quiz1: Array(4).fill(null),
    quiz2: Array(4).fill(null),
    quiz3: Array(4).fill(null),
    quiz4: Array(4).fill(null),
    quiz5: Array(4).fill(null),
  });

  const sections = [
    {
      title: "Introduction to Web Development",
      quizOptions: [
        "HTML is a markup language.",
        "CSS is used for styling web pages.",
        "JavaScript is not a programming language.",
        "React is a server-side framework."
      ]
    },
    {
      title: "CSS and Styling",
      quizOptions: [
        "CSS stands for Cascading Style Sheets.",
        "Flexbox is used for layout design.",
        "CSS cannot be used for animations.",
        "CSS is not compatible with HTML."
      ]
    },
    {
      title: "JavaScript Basics",
      quizOptions: [
        "JavaScript is a programming language.",
        "JavaScript can manipulate the DOM.",
        "JavaScript does not support functions.",
        "JavaScript can run outside the browser."
      ]
    },
    {
      title: "React Essentials",
      quizOptions: [
        "React is a JavaScript library.",
        "Components are building blocks in React.",
        "React does not use JSX syntax.",
        "React supports state management."
      ]
    },
    {
      title: "Advanced Topics",
      quizOptions: [
        "Node.js is used for backend development.",
        "APIs can be integrated using JavaScript.",
        "Webpack is not a module bundler.",
        "Responsive design is unrelated to CSS."
      ]
    }
  ];

  const handleQuizAnswerChange = (quiz, index) => {
    const newAnswers = Array(4).fill(false); 
    newAnswers[index] = true; 

    setUserAnswers(prev => ({
      ...prev,
      [quiz]: newAnswers,
    }));

    const newAnswerStatus = Array(4).fill(null); 
    newAnswerStatus[index] = quizAnswers[quiz][index] ? "correct" : "incorrect";
    
    setAnswerStatus(prev => ({
      ...prev,
      [quiz]: newAnswerStatus,
    }));
  };

  const handleApplyCourse = () => {
    setIsApplied(true);
  };

  const checkAllAnswersCorrect = () => {
    return Object.keys(quizAnswers).every(quiz => {
      return quizAnswers[quiz].every((answer, index) => answer === userAnswers[quiz][index]);
    });
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/path/to/certificate-image.jpg";
    link.download = "certificate.jpg";
    link.click();
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 min-h-screen">
      

      <main className="container mx-auto py-12 px-6">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-blue-900">Master HTML, CSS, JavaScript, and React!</h1>
          </div>

          {!isApplied ? (
            <div className="text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg" onClick={handleApplyCourse}>
                Apply for the Course
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {sections.map((section, index) => (
                <div key={index} className="border rounded-lg p-4 bg-blue-100">
                  <h2 className="text-xl font-semibold text-blue-800">{section.title}</h2>
                  <button className="text-sm text-blue-600 underline mt-2" onClick={() => {
                    if (index === 0) setShowQuiz1(!showQuiz1);
                    if (index === 1) setShowQuiz2(!showQuiz2);
                    if (index === 2) setShowQuiz3(!showQuiz3);
                    if (index === 3) setShowQuiz4(!showQuiz4);
                    if (index === 4) setShowQuiz5(!showQuiz5);
                  }}>
                    {(index === 0 && showQuiz1) || (index === 1 && showQuiz2) || (index === 2 && showQuiz3) || (index === 3 && showQuiz4) || (index === 4 && showQuiz5) ? "Hide Quiz" : "Show Quiz"}
                  </button>

                  {(index === 0 && showQuiz1) || (index === 1 && showQuiz2) || (index === 2 && showQuiz3) || (index === 3 && showQuiz4) || (index === 4 && showQuiz5) ? (
                    <form className="space-y-2 mt-4">
                      {section.quizOptions.map((option, i) => (
                        <label key={i} className="block">
                          <input
                            type="radio"
                            className={`mr-2 ${(answerStatus[`quiz${index + 1}`][i] === "correct") ? "text-blue-600" : (answerStatus[`quiz${index + 1}`][i] === "incorrect") ? "text-red-600" : ""}`}
                            checked={userAnswers[`quiz${index + 1}`][i]}
                            onChange={() => handleQuizAnswerChange(`quiz${index + 1}`, i)}
                          />
                          <span className={answerStatus[`quiz${index + 1}`][i] === "correct" ? "text-blue-600" : answerStatus[`quiz${index + 1}`][i] === "incorrect" ? "text-red-600" : ""}>
                            {option}
                          </span>
                        </label>
                      ))}
                    </form>
                  ) : null}
                </div>
              ))}

              {checkAllAnswersCorrect() && (
                <div className="text-center mt-6">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={() => setShowCertificate(!showCertificate)}>
                    {showCertificate ? "Hide Certificate" : "Generate Certificate"}
                  </button>

                  {showCertificate && (
                    <div className="mt-4 border p-4 rounded-lg bg-white">
                      <img src="src/assets/whatsapp.jpg" alt="Certificate" className="w-40 h-auto" />
                      <button className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg" onClick={handleDownload}>
                        Download Certificate
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default WebPage1;
