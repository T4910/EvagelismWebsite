import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaEnvelope } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="flex justify-around">
      <a href="#" className="bg-white rounded-full p-3 hover:scale-125  transition-all duration-300 ease-in-out">
        <FaInstagram size={20} />
      </a>
      <a href="#" className="bg-white rounded-full p-3 hover:scale-125  transition-all duration-300 ease-in-out">
        <FaTwitter size={20} />
      </a>
      <a href="#" className="bg-white rounded-full p-3 hover:scale-125  transition-all duration-300 ease-in-out">
        <FaFacebook size={20} />
      </a>
      <a href="#" className="bg-white rounded-full p-3 hover:scale-125  transition-all duration-300 ease-in-out">
        <FaYoutube size={20} />
      </a>
      <a href="#" className="bg-white rounded-full p-3 hover:scale-125  transition-all duration-300 ease-in-out">
        <FaEnvelope size={20} />
      </a>
    </div>
  );
};

export default SocialIcons;
