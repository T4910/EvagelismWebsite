import Form from "./emailForm"
import Conclusion from "./conclusion"

const footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div>
      <div className="bg-orange-100 bg-center bg-cover h-screen py-24 pb-12 md:grid md:grid-cols-2 justify-around">
          <Form />
          <Conclusion />
      </div>
      <div className="text-white bg-orange-500 text-center w-full">@ {currentYear} Landmark University Evangelism Group</div>
    </div>
  )
}

export default footer