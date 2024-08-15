import ContainerWrapper from '../ContainerWrapper';
import NavbarItems from './NavbarItems';

const Navbar = () => {
  return (
    <nav className="relative z-1">
      <ContainerWrapper>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-72 p-2 shadow"
              >
                <NavbarItems />
              </ul>
            </div>
            <a className="text-xl bg-slate-50 px-4 py-4 rounded-md font-semibold">
              MN's Recipes
            </a>
          </div>
          <div className="navbar-end bg-slate-100 rounded-l-md hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg font-medium">
              <NavbarItems />
            </ul>
          </div>
        </div>
      </ContainerWrapper>
    </nav>
  );
};

export default Navbar;
