import logo from '@@/assets/Logo-removebg.png';
import Image from 'next/image';
export default function StoreLogo() {
  return (
    <>
      <div>
        <a href='/' className='inline-block'>
          <Image className='block w-20' src={logo} alt='store logo' />
        </a>
      </div>
    </>
  );
}
