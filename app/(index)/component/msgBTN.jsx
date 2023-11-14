'use client'
// import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import sendMsg from './msg.js'

const msgBTN = () => {
    // const { pending } = useFormStatus()

    return (
        <button className="bg-orange-500 rounded-xl text-white p-2 px-8 font-semibold mt-4" formAction={sendMsg}>{ false ? '...' : 'Submit' }</button>
    )
}

export default msgBTN