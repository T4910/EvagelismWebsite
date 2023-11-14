const statementCard = ({children, name}) => {
    return (
        <div className="lg:w-96 w-[28rem] px-8 py-12 grid place-items-center rounded-xl border-2 border-orange-400 bg-white shadow-2xl shadow-orange-400 text-center">
            <p>{children}</p>
            <span className="mt-2 block text-end">-{name}</span>
        </div>
  )
}
  
  export default statementCard