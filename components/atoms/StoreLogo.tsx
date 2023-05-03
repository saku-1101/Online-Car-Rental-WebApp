import logo from '@@/assets/Logo-removebg.png';
import Image from 'next/image';
import Link from 'next/link';
export default function StoreLogo() {
  return (
    <>
      <div>
        <Link href='/' className='inline-block'>
          <Image className='block w-20' src={logo} alt='store logo' />
        </Link>
      </div>
    </>
  );
}
