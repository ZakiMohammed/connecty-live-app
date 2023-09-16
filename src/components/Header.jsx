import { FaAddressCard } from 'react-icons/fa';

function Header() {
  return (
    <>
      <h1 className="text-center mt-5 display-1 fw-bolder text-dark-emphasis">
        <FaAddressCard size={'3rem'} className='text-success' /> connecty
      </h1>
    </>
  )
}

export default Header
