import Biodata from "./biodata"

const footer = () => {
  return (
    <div className="bg-orange-500 bg-center bg-cover h-screen pt-20">
      <div className="rounded-xl bg-orange-400 mx-auto p-8 w-5/6">
        <Biodata />
      </div>
    </div>
  )
}

export default footer