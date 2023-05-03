import Link from 'next/link';

export default function NavMenu() {
  return (
    <>
      <div className='dropdown'>
        <label tabIndex={0} className='btn btn-ghost btn-circle'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h7' />
          </svg>
        </label>
        <ul tabIndex={0} className='menu dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box'>
          <li>
            <Link href={{ pathname: '/' }}>Home</Link>
          </li>
          <li>
            <Link href={{ pathname: '/products' }}>Rent</Link>
          </li>
          <li>
            <Link href={{ pathname: '/cart' }}>Your Cart</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
