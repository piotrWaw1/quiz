import './App.css'
import questions from '../data/questions.json'
import Question from "./components/Question.tsx";

export interface QuestionData {
  question: string;
  options: string[];
  correct_answer: string[] | string;

}

function App() {
  const questionsData: QuestionData[] = questions.questions
  console.log(questionsData[0].question)
  return (
    <div>
      {questionsData
        .sort(() => Math.random() - 0.5)
        .map((option, index) => (
        <Question question={option} key={index}/>
      ))}
    </div>
  )
}

export default App
