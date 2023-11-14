import Socials from "./socials"

const conclusion = () => {
  return (
    <div className="grid place-items-center text-orange-500">
        <div className="flex flex-col gap-12">
          <div>
            <h2 className="text-center font-bold text-xl">Matthew 28:19-20</h2>
            {/* Put that effect where letters where just popping and spawning around */}
            <p className="text-xl font-semibold text-center w-4/6 mx-auto">
                Go ye therefore, and teach all nations, 
                baptizing them in the name of the Father,
                and of the Son, and of the Holy Ghost. 
                Teaching them to observe all things whatsoever 
                I have commanded you: and, lo, I am with you always, 
                even unto the end of the world. Amen
            </p>
          </div>
          <Socials />
        </div>
    </div>
  )
}

export default conclusion