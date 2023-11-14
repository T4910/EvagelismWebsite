'use client'
import { useState } from "react"

const field = ({ question, answer }) => {
    const [ on, setOn ] = useState(false)

    function toggle(){
        return setOn((on) => !on)
    }

  return (
    <div className="w-5/6 md:w-2/3 mx-auto rounded-xl bg-orange-400">
        <div className="flex items-center justify-between font-semibold text-white">
            <h6 className={`${on ? 'rounded-tl-xl' : 'rounded-l-xl'} h-full py-4 px-8 flex-grow bg-orange-400 `}>{question}</h6>
            <button className={`${on ? 'rounded-tr-xl' : 'rounded-r-xl'} h-full px-8 py-7 md:py-4 inline-block font-bold bg-orange-500`} onClick={toggle} >+</button>
        </div>
        <div className={`${ !on && 'h-0 hidden'} p-10 rounded-b-xl border-b-2 border-x-2 border-orange-400 bg-white`}>
            <p>{answer}</p>
        </div>
    </div>
  )
}

export default field