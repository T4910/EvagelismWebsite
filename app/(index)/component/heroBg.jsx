import Image from "next/image"

const heroBg = () => {
  return (
        <div className="relative h-screen text-white bg-black -z-40">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black to-transparent">
            {/* Gradient overlay */}
          </div>
          <div className="absolute inset-0 -z-20 bg-background bg-cover bg-left w-full min-h-screen bg-no-repeat transform scale-x-[-1]">
            {/* Background image */}
          </div>
          <div className="w-5/6 md:w-[42rem] lg:m-0 absolute inset-0 z-0 flex flex-col pt-[30dvh] mx-auto md:pl-12 lg:pl-20 lg:pt-48 gap-3 md:gap-7 justify-start">
            <div>
              <p className="font-bold text-4xl md:text-6xl text-orange-400">Landmark University Evangelism Group</p>
            </div>
            <div>
              <p className=" md:text-2xl">Reaching out to transfom lives...</p>
            </div>
          </div>
        </div>
  )
}

export default heroBg