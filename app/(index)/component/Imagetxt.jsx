import Image from 'next/image'

const ImageWithText = ({ url, children }) => {
  return (
    <div className="relative rounded-xl my-12 mx-4 md:mx-0">
      <div className="absolute inset-0  bg-orange-500 opacity-50 rounded-xl"></div>
      <Image src={url} alt="Evangelism Group Members" className="w-full h-full object-cover rounded-xl" width={500} height={200}/>
      <div className="absolute inset-0 grid items-center text-white text-4xl w-full text-center font-bold hover:scale-105 md:hover:scale-125 transition-all duration-500 ease-in-out">
        <p className="w-3/4 mx-auto">{children}</p>
      </div>
    </div>
  );
};

export default ImageWithText;
