import Image from "next/image"

const heroBg = () => {
  return (
        <div className="relative h-screen text-white bg-black -z-40">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black to-transparent">
            {/* Gradient overlay */}
          </div>
          <div className="absolute inset-0 -z-20 bg-background bg-cover bg-left h-screen bg-no-repeat transform scale-x-[-1]">
            {/* Background image */}
          </div>
          <div className="absolute inset-0 z-0 flex flex-col pt-[30dvh] pl-12 lg:pl-28 lg:pt-48 gap-7 justify-start">
            <div className="md:w-[40rem]">
              <p className="font-bold text-6xl text-orange-400">Landmark University Evangelism Group</p>
            </div>
            <div>
              <p className="text-2xl">Reaching out to transfom lives...</p>
            </div>
          </div>
        </div>
  )
}

export default heroBg