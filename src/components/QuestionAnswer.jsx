import React from 'react';

function QuestionAnswer({ question, answer }) {
    return (
        <div>
            <p>Question: {question}</p>
            <p>Answer: {answer}</p>
        </div>
    );
}

export default QuestionAnswer;
