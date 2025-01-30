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

  return (
    <div>
      {questionsData
        .sort(() => Math.random() - 0.5)
        .map((option, index) => (
        <Question question={option} index={index} key={index}/>
      ))}
    </div>
  )
}

export default App
