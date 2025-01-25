import React, { useState, useRef, useEffect } from 'react';
import { useSpeechSynthesis } from 'react-speech-synthesis'; 
import Webcam from 'react-webcam';

const MockInterview = () => {
  const [role, setRole] = useState('');
  const [techStack, setTechStack] = useState('');
  const [experience, setExperience] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isInterviewStarted, setIsInterviewStarted] = useState(false);
  const [isInterviewCompleted, setIsInterviewCompleted] = useState(false);
  const [feedback, setFeedback] = useState(''); 

  const { speak } = useSpeechSynthesis();
  const webcamRef = useRef(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      // Replace with your actual Gemini API call to fetch questions
      // based on role, techStack, and experience
      const response = await fetch('/api/get-interview-questions', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role, techStack, experience }),
      });
      const data = await response.json();
      setQuestions(data.questions); 
    };

    if (role && techStack && experience) {
      fetchQuestions();
    }
  }, [role, techStack, experience]);

  const handleStartInterview = () => {
    setIsInterviewStarted(true);
    speak(questions[currentQuestionIndex]); // Speak the first question
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    if (currentQuestionIndex + 1 < questions.length) {
      speak(questions[currentQuestionIndex + 1]); 
    } else {
      setIsInterviewStarted(false);
      setIsInterviewCompleted(true);
    }
  };

  const handleFeedbackSubmit = () => {
    // Send feedback to server using API call
    // ...
    console.log('Feedback submitted:', feedback);
  };

  return (
    <div>
      <h1>Mock Interview</h1>

      {!isInterviewStarted && !isInterviewCompleted && (
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Data Scientist">Data Scientist</option>
            {/* Add more options */}
          </select>

          <label>Tech Stack:</label>
          <input 
            type="text" 
            value={techStack} 
            onChange={(e) => setTechStack(e.target.value)} 
            placeholder="e.g., JavaScript, React, Python" 
          />

          <label>Experience (years):</label>
          <input 
            type="number" 
            value={experience} 
            onChange={(e) => setExperience(e.target.value)} 
          />

          <button onClick={handleStartInterview} disabled={!(role && techStack && experience)}>
            Start Interview
          </button>
        </div>
      )}

      {isInterviewStarted && (
        <div>
          <h2>Interview in Progress</h2>
          <Webcam audio={false} ref={webcamRef} /> 
          <p>Question: {questions[currentQuestionIndex]}</p>
          <button onClick={handleNextQuestion}>Next Question</button>
        </div>
      )}

      {isInterviewCompleted && (
        <div>
          <h2>Interview Completed</h2>
          <p>Thank you for participating!</p>
          <label>Feedback:</label>
          <textarea 
            value={feedback} 
            onChange={(e) => setFeedback(e.target.value)} 
          />
          <button onClick={handleFeedbackSubmit}>Submit Feedback</button>
        </div>
      )}
    </div>
  );
};

export default MockInterview;