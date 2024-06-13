import React, {useState} from 'react'
import axios from 'axios';
const Chatbox = ({handleAskedQuestion, question, answer, setQuestion}) => {
  // const [q, setQ] = useState("");
    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    };
    // const handleAskedQuestion = async () => { 
    //     console.log(question);
    //     // logic to send the question to nlp model
    //     const questionResponse = await axios.post("http://localhost:8000/ask-question", {
    //         question,
    //         text: uploadResponse.data.text, // Assuming filename is returned in the response
    //     });
    //     console.log(questionResponse)
    //     setAnswer(questionResponse.data.answer);
    //     setQuestion("");
    // };
  return (
    <div className='flex-grow-0 flex-shrink-0 fixed bottom-0 left-0 w-[100%] p-20'>
      <input type="text" value={question} onChange={handleQuestionChange} placeholder="Send a message..." className='border-black border rounded-lg p-3 w-full'/>
      <button onClick={handleAskedQuestion}>
        <img src="send_icon.svg" alt="Send" className='absolute right-24 top-1/2 transform -translate-y-1/2 hover:bg-gray-100 rounded-full'/>
      </button> 
    </div>
  )
}

export default Chatbox
