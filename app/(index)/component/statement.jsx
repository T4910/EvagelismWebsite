import Card from "./visionCard"
import Image from "next/image"

// Add cursor effect that moves with the cursor - don't change cursor
// put the dynamic layer infront bg but behind text
const statement = () => {
  return (
    <div className="flex flex-col justify-around py-12 pb-20 bg-orange-100 lg:gap-6">
      <Card heading="Vision">
        <p className="text-lg">
          "To revive the glorious destinies of men by termination
          ignorance and radiation God's love to all of humanity
          (Matthew 5:14-16)."
        </p>
      </Card>
      <div className="flex w-5/6 mx-auto gap-2">
        <Image className="hidden lg:block rounded-xl" src="/images/EXEC.jpg" width={400} height={400}/>
        <div className="p-2 md:p-12 flex flex-col justify-center gap-2">
          <h4 className="lg:text-left text-center font-extrabold text-orange-500 text-xl mb-2 lg:mb-0">Mission</h4>
          <div>
            <p className="text-lg hidden lg:block text-left">Here at Evangelism Group, we aim to: </p>
            <ul className="list-disc pl-5 text-lg">
              <li>To show forth the glorious light of salvation by
                sowing the seed of God's workd into the lives of men.
              </li>
              <li>
                To uncover potentials in the lives of individuals
              </li>
              <li>
                Reaching out to transform lives to restor joy to the depressed.
              </li>
              <li>
                To organize need-driven outreaches that provide food for the hungry,
                medical care for the sick, clean water for the thirsty, and much more 
                <i> - Matthew 25:36</i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default statement


{/* <Card heading="Vision">
<p>
  "To revive the glorious destinies of men by termination
  ignorance and radiation God's love to all of humanity
  (Matthew 5:14-16)."
</p>
</Card>
<Card heading="Mission">
<ul className="list-disc">
  <li>To show forth the glorious light of salvation by
    sowing the seed of God's workd into the lives of men.
  </li>
  <li>
    To uncover potentials in the lives of individuals
  </li>
  <li>
    Reaching out to transform lives to restor joy to the depressed.
  </li>
  <li>
    To organize need-driven outreaches that provide food for the hungry,
    medical care for the sick, clean water for the thirsty, and much more 
    (Matthew 25:36)
  </li>

</ul>
</Card> */}
