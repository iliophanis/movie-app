import { RiMovie2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

import Search from "components/layout/navBar/Search";

const NavBar = () => {
 return (
  <nav className="bg-gray-800 border-gray-200 px-2 sm:px-4 py-2.5">
   <div className="container flex flex-wrap justify-between items-center mx-auto">
    <Link className="flex" to="/">
     <RiMovie2Line className="mr-3 h-10 w-8 text-indigo-700" />
     <div className="self-center text-lg font-semibold whitespace-nowrap text-white">
      Movie App
     </div>
    </Link>
    <div className="flex md:order-2">
     <div className="relative mr-3 md:mr-0 md:block">
      <Search />
     </div>
    </div>
   </div>
  </nav>
 );
};

export default NavBar;
