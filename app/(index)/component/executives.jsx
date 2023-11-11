import ImageSlider from "./imageslider"
import Image from "next/image"

const source = [
  {serial: 2, src: '/GEN.jpg'},
  {serial: 2, src: '/1.jpg'},
  {serial: 2, src: '/HEAD.jpg'},
  {serial: 2, src: '/2.jpg'},
  {serial: 2, src: '/VGEN.jpg'}
]

const executives = () => {
  return (
    <div className="py-4">
        <h2 className="text-3xl p-8 pb-0 font-bold text-center">Meet our executives...</h2>
        <ImageSlider source={source}/>
    </div>
  )
}

export default executives