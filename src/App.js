import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import QuestionAnswer from './components/QuestionAnswer';
import Chatbox from './components/Chatbox';
import axios from 'axios';
function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [extractedText, setExtractedText] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file.type.includes('pdf')) {
      alert('Please select a PDF file.');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file); // Read the file content as a data URL

    reader.onload = async (e) => {
        const formData = new FormData();
        formData.append("file", file);

        // Now you can access the file content from e.target.result (data URL)
        console.log(formData.get("file"));

        // Send a POST request to the backend upload endpoint using Axios (assuming Axios is installed)
        const uploadResponse = await axios.post("http://localhost:8000/upload-pdf", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        setExtractedText(uploadResponse.data.text);
        console.log(uploadResponse.data);
    };

    setSelectedFile(file);
    // logic to save the file in database and send it to the upload pdf endpoint
    
  };

  const handleAskedQuestion = async () => { 
      console.log(question);
      // logic to send the question to nlp model
      const formData = new FormData();
      formData.append('question', question);
      formData.append('text', extractedText);
      const questionResponse = await axios.post("http://localhost:8000/ask-question", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(questionResponse)
      setAnswer(questionResponse.data.answer);
      setQuestion("");
  };

  const handleSubmit = async (event) => {
      event.preventDefault();
      if (!selectedFile) {
          alert("Please select a PDF file");
          return;
      }

      // Simulate form data (replace with actual data later)
    //   const formData = new FormData();
    //   formData.append("file", selectedFile);

    //   // Send a POST request to the backend upload endpoint using Axios (assuming Axios is installed)
    //   const uploadResponse = await axios.post("/upload-pdf", formData, {
    //       headers: {
    //           "Content-Type": "multipart/form-data",
    //       },
    //   });
    //   console.log(uploadResponse.data);  // For debugging purposes

    //   // Clear the selected file for next upload
    //   setSelectedFile(null);

      // Send a POST request to the backend question endpoint
    //   const questionResponse = await axios.post("/ask-question", {
    //       question,
    //       filename: uploadResponse.data.filename, // Assuming filename is returned in the response
    //   });
    //   setAnswer(questionResponse.data.answer);
  };

  return (
      <div className='p-4 flex flex-col h-[100vh]'>
          {/* <UploadPDF handleFileChange={handleFileChange} handleSubmit={handleSubmit} /> */}
          <Navbar handleFileChange={handleFileChange} selectedFile={selectedFile} />
          <Chatbox handleAskedQuestion={handleAskedQuestion} question={question} answer={answer} setQuestion={setQuestion} />
          {/* <input type="text" value={question} onChange={handleQuestionChange} placeholder="Enter your question" /> */}
          {answer && <QuestionAnswer question={question} answer={answer} />}
      </div>
  );
}


export default App;
