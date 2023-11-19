// Add slow animation to opening effect
const field = ({question, answer, serial, active, setActive }) => {
    function toggleActive(){
        return setActive(() => active ? null : serial)
    }

  return (
    <div className="w-5/6 md:w-2/3 mx-auto rounded-xl bg-orange-400">
        <div className="flex items-center justify-between font-semibold text-white">
            <h6 className={`${active ? 'rounded-tl-xl' : 'rounded-l-xl'} h-full py-4 px-8 w-9/12 md:w-10/12 lg:w-[87%] bg-orange-400`}>{question}</h6>
            <button className={`${active ? 'rounded-tr-xl' : 'rounded-r-xl'} flex-grow h-full px-4 py-7 md:py-4 inline-block font-bold bg-orange-500`} onClick={toggleActive}>{active ? '-' : '+'}</button>
        </div>
        <div className={`${!active && 'h-0 hidden'} p-10 rounded-b-xl border-b-2 border-x-2 border-orange-400 bg-white`}>
            <p>{answer}</p>
        </div>
    </div>
  )
}

export default field