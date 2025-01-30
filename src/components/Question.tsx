import { QuestionData } from "../App.tsx";
import React from "react";

interface QuestionProps {
  question: QuestionData;
  index: number;
}

function Question({ question, index }: QuestionProps) {

  const checkAnswer = (option: string, e: React.MouseEvent<HTMLParagraphElement>) => {
    const correctAnswers = question.correct_answer;
    if (correctAnswers.includes(option)) {
      e.currentTarget.classList.add("correct");
    } else {
      e.currentTarget.classList.add("wrong");
    }
  }


  return (
    <div className="question">
      <h2>{`${index+1}. ${question.question}`}</h2>
      {question.options
        .sort(() => Math.random() - 0.5)
        .map((option, index) => (
            <p className="answer" onClick={(e) => checkAnswer(option, e)} key={index}>{option}</p>
          )
        )}
    </div>
  )
}

export default Question;