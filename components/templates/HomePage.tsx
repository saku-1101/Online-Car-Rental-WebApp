import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { usePersistedState } from '@@/hooks/usePersistedState';
import logo from '@@/assets/Logo-removebg.png';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();
  // firstLoaded or not is persisted in localStorage
  // so if the page is reloaded, it won't redirect to /registration once you've already been there
  const [firstLoaded, setFirstLoaded] = usePersistedState<Boolean>({ key: 'firstLoaded', initialValue: true });
  useEffect(() => {
    if (firstLoaded) {
      router.push('/registration');
      setFirstLoaded(false);
    }
  }, [firstLoaded]);

  return (
    <div className='hero w-full h-full'>
      <div className='hero-content flex-col justify-center gap-5'>
        <div className='lg:w-1/2 w-full'>
          <Image src={logo} alt='' width={0} height={0} /> {/* nextが自動でサイズを最適化してくれる */}
        </div>
        <div>
          <h1 className='text-5xl font-bold'>
            Welcome to <span className='text-secondary'>Hertz Car Store</span>!
          </h1>
          <p className='py-6'>
            🌸 We&apos;re happy to be here to help you with an extraordinary online-shopping experience! <br></br>
            Start your shopping from the entrance below!
          </p>
        </div>
        <Link href='/products'>
          <button className='btn btn-outline'>Get Started!</button>
        </Link>
      </div>
    </div>
  );
}
