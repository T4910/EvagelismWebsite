import Card from "./testimonyCard"

const testimonies = () => {
  return (
    <div className="py-4 pb-20">
        <h2 className="text-3xl p-8 font-bold text-center">New Belivers Testimonies...</h2>
        <div className="flex flex-wrap gap-16 justify-evenly">
          <Card name='Adeboye Desmond'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis veniam accusamus fugit nobis, doloribus autem! Omnis facere delectus ipsam sunt. Dolorem fugit pariatur ducimus impedit nobis aperiam itaque maiores possimus.
          </Card>
          <Card name='Taiwo Emmanuel'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis veniam accusamus fugit nobis, doloribus autem! Omnis facere delectus ipsam sunt. Dolorem fugit pariatur ducimus impedit nobis aperiam itaque maiores possimus.
          </Card>
          <Card name='Taiwo Emmanuel'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis veniam accusamus fugit nobis, doloribus autem! Omnis facere delectus ipsam sunt. Dolorem fugit pariatur ducimus impedit nobis aperiam itaque maiores possimus.
          </Card>
        </div>
    </div>
  )
}

export default testimonies