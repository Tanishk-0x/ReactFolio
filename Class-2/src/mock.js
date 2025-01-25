import React, { useState } from "react";
import axios from "axios";

const MockInterview = () => {

    const API_KEY = "AIzaSyCvqHy81ejWHkY3qEy6Wlip4ktDEBfhHuo" ; 

    let url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + API_KEY


  const [formData, setFormData] = useState({
    jobRole: "",
    techStack: "",
    experience: "",
  });
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [feedback, setFeedback] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const startInterview = async () => {
    try {
      // Fetch questions from an API
      const response = await axios.get(url); // Replace with any questions API
      setQuestions(response.data.questions);
      setCurrentQuestionIndex(0);
      setFeedback(null);
      setUserAnswers([]);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const handleAnswerChange = (e) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = e.target.value;
    setUserAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      generateFeedback();
    }
  };

  const generateFeedback = () => {
    const totalQuestions = questions.length;
    const answered = userAnswers.filter((ans) => ans && ans.trim() !== "").length;
    setFeedback(`You answered ${answered} out of ${totalQuestions} questions.`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Mock Interview App</h1>

      {!questions.length && (
        <div>
          <h2>Fill Out Details</h2>
          <input
            type="text"
            name="jobRole"
            placeholder="Job Role"
            value={formData.jobRole}
            onChange={handleInputChange}
          />
          <br />
          <input
            type="text"
            name="techStack"
            placeholder="Tech Stack (e.g., JavaScript, React)"
            value={formData.techStack}
            onChange={handleInputChange}
          />
          <br />
          <input
            type="number"
            name="experience"
            placeholder="Years of Experience"
            value={formData.experience}
            onChange={handleInputChange}
          />
          <br />
          <button onClick={startInterview}>Start Interview</button>
        </div>
      )}

      {questions.length > 0 && feedback === null && (
        <div>
          <h2>Question {currentQuestionIndex + 1}:</h2>
          <p>{questions[currentQuestionIndex]}</p>
          <textarea
            rows="4"
            cols="50"
            placeholder="Your answer"
            value={userAnswers[currentQuestionIndex] || ""}
            onChange={handleAnswerChange}
          />
          <br />
          <button onClick={handleNextQuestion}>
            {currentQuestionIndex < questions.length - 1 ? "Next" : "Submit"}
          </button>
        </div>
      )}

      {feedback && (
        <div>
          <h2>Feedback</h2>
          <p>{feedback}</p>
        </div>
      )}
    </div>
  );
};

export default MockInterview;
