import Image from 'next/image'

const ImageWithText = ({ url, children }) => {
  return (
    <div className="relative rounded-xl my-16">
      <div className="absolute inset-0  bg-orange-500 opacity-50 rounded-xl"></div>
      <Image src={url} alt="Your Image" className="w-full h-full object-cover rounded-xl" width={500} height={200}/>
      <div className="absolute inset-0 flex items-center justify-center text-white text-4xl w-3/4 text-center mx-auto font-bold">
        {children}
      </div>
    </div>
  );
};

export default ImageWithText;
