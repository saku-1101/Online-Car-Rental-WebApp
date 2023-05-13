import Link from 'next/link';

export default function ThankyouPage() {
  return (
    <div className='hero w-screen h-screen'>
      <div className='hero-content flex-col justify-center'>
        <h1 className='text-5xl font-bold'>Thank you for your purchase!</h1>
        <p className='py-6 text-center'>
          Thank you for shopping with us today! <br></br>
          We&apos;re looking forward to having you soon😊🥕
        </p>
        <Link href={{ pathname: '/' }}>
          <button className='btn btn-primary'>Back to Home</button>
        </Link>
      </div>
    </div>
  );
}
