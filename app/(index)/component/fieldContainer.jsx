'use client'
import { useState } from 'react'
import Field from "./field"


const fieldContainer = ({q: QUESTIONS}) => {
    const [active, setActive] = useState(null)
    return (
        <>{ 
            QUESTIONS.map(({question, answer}, index) => <Field active={active == index ? true : false} setActive={setActive} key={index} serial={index} question={question} answer={answer}/>) 
        }</>
    )
}

export default fieldContainer