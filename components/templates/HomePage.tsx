import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { usePersistedState } from '@@/hooks/usePersistedState';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();

  return (
    <div className='hero'>
      <div className='hero-content flex-col lg:flex-row'>
        <img src='../assets/Logo-removebg.jpg' alt='' className='max-w-sm rounded-lg shadow-2xl' />
        <div>
          <h1 className='text-5xl font-bold'>
            Welcome to <span className='text-secondary'>Hertz Car Store</span>!
          </h1>
          <p className='py-6'>
            🌸 We're happy to be here to help you with an extraordinary online-shopping experience! <br></br>
            Start your shopping from the entrance below!
          </p>
          <Link href='/products'>
            <button className='btn btn-outline'>Get Started!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
