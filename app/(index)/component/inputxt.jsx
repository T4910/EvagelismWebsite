const inputxt = ({label, inline, input}) => {
  return (
    <div className={`${inline ? 'flex-row inline col-span-1' : 'flex-col col-span-2'} flex mb-8`}>
        <label htmlFor="Full-Name" className="text-white">{label}: </label>
        <input type={`${input ?? 'text'}`} name="Full-Name" className="bg-orange-400 border-b-2 border-0 w-full"/>
    </div>
  )
}

export default inputxt