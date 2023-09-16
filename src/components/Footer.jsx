import { FaAddressCard } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="text-center p-5 bg-light">
      <b><FaAddressCard className='text-success' /> connecty</b> - All rights reserved &copy; {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
