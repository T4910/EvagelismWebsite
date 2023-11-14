import Message from "./msgBTN"

const simpleForm = () => {
  return (
    <div className="grid place-items-center ">
      <form className="bg-white mx-auto py-12 px-12 rounded-xl flex flex-col items-center gap-4 shadow-2xl shadow-orange-400">
          <p className="text-center text-2xl text-orange-500 font-bold">Join Evangelism Group</p>
          <div className="flex gap-4">
            <div className="w-full">
              <label className="block" htmlFor="surname">Surname <span className="text-orange-400">*</span></label>
              <input required className="rounded-xl focus-visible:border-orange-500  border-orange-400 border-2 p-1 px-4" type="text" name="surname"/>
            </div>
            <div className="w-full">
              <label className="block" htmlFor="othername">Other names <span className="text-orange-400">*</span></label>
              <input required className="rounded-xl focus-visible:border-orange-500  border-orange-400 border-2 p-1 px-4" type="text" name="othername"/>
            </div>
          </div>
          <div className="w-full">
            <label className="block" htmlFor="email">Email <span className="text-orange-400">*</span></label>
            <input required className="rounded-xl focus-visible:border-orange-500  border-orange-400 border-2 p-1 px-4 flex-grow w-full" type="email" name="email"/>
          </div>
          <Message />
          {/* <input type="submit" className="bg-orange-500 rounded-xl text-white p-2 px-8 font-semibold mt-4"/> */}
      </form>
    </div>
  )
}

export default simpleForm