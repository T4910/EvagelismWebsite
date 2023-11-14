import Form from "./emailForm"
import Conclusion from "./conclusion"

const footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="flex flex-col justify-between lg:h-screen bg-orange-100 bg-center bg-cover pt-12 gap-20 md:gap-12 md:pt-36 lg:py-24 pb-8 lg:pb-12 lg:grid lg:grid-cols-2">
          <Form />
          <Conclusion />
      </div>
      <div className="text-white bg-orange-500 text-center w-full">@ {currentYear} Landmark University Evangelism Group</div>
    </footer>
  )
}

export default footer