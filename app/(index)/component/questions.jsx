import Field from './field'

const QUESTIONS = [
    {
        question: 'When are our pre-services?',
        answer: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione incidunt ipsa saepe omnis neque iure non sed laborum ullam. Repudiandae doloribus eos dolorum consequuntur aspernatur, expedita eligendi temporibus veritatis tenetur.'
    },
    {
        question: "What is Believer's foundtaion class?",
        answer: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione incidunt ipsa saepe omnis neque iure non sed laborum ullam. Repudiandae doloribus eos dolorum consequuntur aspernatur, expedita eligendi temporibus veritatis tenetur.'
    },
    {
        question: 'What is a sub-team?',
        answer: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione incidunt ipsa saepe omnis neque iure non sed laborum ullam. Repudiandae doloribus eos dolorum consequuntur aspernatur, expedita eligendi temporibus veritatis tenetur.'
    },
    {
        question: 'Where is Evangelism office?',
        answer: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione incidunt ipsa saepe omnis neque iure non sed laborum ullam. Repudiandae doloribus eos dolorum consequuntur aspernatur, expedita eligendi temporibus veritatis tenetur.'
    }
]


const questions = () => {
  return (
    <div className="pb-16 lg:pb-20 bg-orange-100">
        <h2 className="text-3xl pt-12 p-8 font-bold text-center">Some questions and answers for you...</h2>
        <div className="flex flex-col gap-8">
            { QUESTIONS.map(({question, answer}, index) => <Field key={index} question={question} answer={answer}/>) }
        </div>
    </div>
  )
}

export default questions