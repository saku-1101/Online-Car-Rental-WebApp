import CustomerRegistration from '@@/components/templates/CustomerRegistration';

export default function Products() {
  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <CustomerRegistration />
      </div>
      <footer className='invisible footer footer-center p-4 bg-accent-focus text-base-content mt-5 sticky bottom-0 z-10 px-10 drop-shadow-md'>
        <div>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by Sakura A</p>
        </div>
      </footer>
    </>
  );
}
