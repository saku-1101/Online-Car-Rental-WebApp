import Link from 'next/link';


export default function ThankyouPage() {
  return (
    <div className='hero'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>Thank you for your purchase!</h1>
          <p className='py-6'>
            Thank you for shopping with us today! <br></br>
            We're looking forward to having you soon😊🥕
          </p>
          <Link href={{ pathname: '/' }}>
            <button className='btn btn-primary'>Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
