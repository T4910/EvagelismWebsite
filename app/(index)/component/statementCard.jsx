const statementCard = ({children, heading}) => {
  return (
    <>
        <h4 className="mx-auto md:w-36 relative font-semibold top-7 px-8 py-4 bg-orange-400 rounded-full text-center text-white">{heading}</h4>
        <div className="mx-auto p-20 mb-28 grid place-items-center rounded-xl bg-white shadow-2xl shadow-orange-400 md:w-[32rem] h-56 text-center">
          {children}
        </div>
    </>
)
}

export default statementCard