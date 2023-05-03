import NavMenu from '@@/components/atoms/NavMenu';
import StoreLogo from '@@/components/atoms/StoreLogo';

export default function NavBar() {
  return (
    <div className='navbar bg-base-100 w-screen sticky top-0 z-10 px-10 drop-shadow-md'>
      <div className='navbar-start gap-10'>
        <NavMenu />
        <StoreLogo />
      </div>
    </div>
  );
}
