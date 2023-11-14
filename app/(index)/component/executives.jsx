import ImageSlider from "./imageslider"

const source = [
  {serial: 1, src: '/images/GEN.jpg'},
  {serial: 2, src: '/images/1.jpg'},
  {serial: 3, src: '/images/HEAD.jpg'},
  {serial: 4, src: '/images/2.jpg'},
  {serial: 5, src: '/images/VGEN.jpg'}
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