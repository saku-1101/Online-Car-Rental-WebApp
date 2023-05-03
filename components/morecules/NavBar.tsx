import NavMenu from '../atoms/NavMenu';
import StoreLogo from '../atoms/StoreLogo';
import SearchBox from '../atoms/SearchBox';
import BreadCrumbs from '../atoms/BreadCrumbs';

export default function NavBar() {
  return (
    <div className='navbar bg-base-100 w-screen sticky top-0 z-10 px-10 drop-shadow-md'>
      <div className='navbar-start gap-10'>
        <NavMenu />
        <StoreLogo />
        {/* <BreadCrumbs /> */}
      </div>

      {/* <div className='navbar-end flex'>
        <SearchBox />
      </div> */}
    </div>
  );
}
