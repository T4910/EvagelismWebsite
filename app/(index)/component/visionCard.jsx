const statementCard = ({children, heading}) => {
  return (
    <div className="mx-auto w-5/6 lg:w-[32rem] h-56 mb-36">
        <h4 className="hover:group-hover:scale-125 mx-auto w-1/3 relative font-semibold top-7 px-8 py-4 bg-orange-400 rounded-full text-center text-white">{heading}</h4>
        <div className="hover:group-hover:scale-125  sc p-12 md:p-20 grid place-items-center rounded-xl bg-white shadow-2xl shadow-orange-400 text-center">
          {children}
        </div>
    </div>
)
}

export default statementCard