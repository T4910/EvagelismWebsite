'use client'
import { useFormStatus, useFormState } from 'react-dom'
import sendMsg from './msg.js'

const emailFormContent = ({cookie: hasSentBefore}) => {
    const [{state: msgState}, formAction] = useFormState(sendMsg, {state: null})
    
    const Output = () => {
      const { pending } = useFormStatus()
      /*********
             *  
             *   if(pending){
             *     <Loading />
             *   } 
             *   else {
             *     if(msgState != null || hasSentBefore){
             *       if(msgState == 'ok' || hasSentBefore) <ThankYou />
             *       else <Error />
             *     } 
             *     else {
             *       <Original />
             *     }
             *   }
             * 
      ***********/      
      return(
          <>{pending ? <Loading /> : (msgState != null || hasSentBefore) ? (msgState == 'ok' || hasSentBefore) ? <ThankYou /> : <Error /> : <Original />}</>
      )       
    }

    const Original = () => {
        return (
          <> 
            <p className="text-center text-2xl text-orange-500 font-bold">Join Evangelism Group</p>
              <div className="flex flex-col gap-4 lg:flex-row w-full">
                <div className="w-full">
                  <label className="block" htmlFor="surname">Surname <span className="text-orange-400">*</span></label>
                  <input  required className="w-full rounded-xl focus-visible:border-orange-500  border-orange-400 border-2 p-1 px-4" type="text" name="surname"/>
                </div>
                <div className="w-full">
                   <label className="block" htmlFor="othername">Other names <span className="text-orange-400">*</span></label>
                  <input  required className="w-full rounded-xl focus-visible:border-orange-500  border-orange-400 border-2 p-1 px-4" type="text" name="othername"/>
                </div>
              </div>
              <div className="w-full">
                <label className="block" htmlFor="email">Email <span className="text-orange-400">*</span></label>
                <input required className="rounded-xl focus-visible:border-orange-500  border-orange-400 border-2 p-1 px-4 flex-grow w-full" type="email" name="email"/>
              </div>
            <button className="bg-orange-500 rounded-xl text-white p-2 px-8 font-semibold mt-4">Submit</button>
          </>
        )
    }
    
    const Loading = () => {
      return <div className="p-12 my-16 border-t-4 border-orange-500 border-solid border-opacity-50 rounded-full animate-spin"></div>
    }
    
    const ThankYou = () => {
    return (
        <div className="py-20 text-center text-xl font-semibold text-orange-400">
        <p className="mb-1">Your request has been sent!!!</p>
        <p>Thanks for joining</p>
        <p>God bless you</p>
        </div>
    )
    }

    const Error = () => {
        return (
            <div  className="py-16 text-center text-xl font-semibold text-orange-400">
            <p>Error in the server</p>
            <p className="mb-8">Did you put in a valid email address?</p>
            <button formAction={formAction}>Refresh</button>
            </div>
        )
    }

    return (
      <form action={formAction} className="bg-white w-11/12 md:w-3/4 lg:w-5/6 mx-auto py-12 px-12 rounded-xl flex flex-col items-center gap-4 shadow-2xl shadow-orange-400">
        <Output />
      </form>
    )
}

export default emailFormContent