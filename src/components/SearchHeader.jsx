import Link from "next/link";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";

function SearchHeader() {
   return (
      <header className="sticky top-0 bg-white">
         <div className="flex w-full p-6 items-center justify-between">
            <Link href="/">
               <h1 className="text-3xl text-gray-700 font-bold">
                  {process.env.SITE_NAME}
               </h1>
            </Link>
            <div className="flex-1">
               <SearchBox />
            </div>
            <div className="hidden md:inline-flex space-x-2">
               <RiSettings3Line className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer" />
               <TbGridDots className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer" />
            </div>
            <button className="bg-gray-700 text-white px-5 py-2 ml-2 font-medium rounded-md hover:brightness-105 hover:bg-gray-800 hover:shadow-md transition-shadow">
               Connexion
            </button>
         </div>
      </header>
   );
}

export default SearchHeader;
