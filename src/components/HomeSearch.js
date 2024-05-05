import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

export default function HomeSearch() {
    return (
        <>
            <form className="flex w-full px-5 py-3 mt-5 mx-auto max-w-[90%] sm:max-w-xl lg:max-w-2xl border border-gray-200 rounded-full hover:shadow-lg hover:border-gray-300 focus-within:shadow-md transition-all">
                <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
                <input type="text" className="flex-grow focus:outline-none" />
                <BsFillMicFill className="text-lg text-gray-500" />
            </form>
            <div className="flex flex-col mt-8 space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4 justify-center">
                <button className="w-36 h-10 bg-gray-100 text-sm text-gray-800 rounded-lg hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md transition-shadow">
                    Recherche Google
                </button>
                <button className="w-36 h-10 bg-gray-100 text-sm text-gray-800 rounded-lg hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md transition-shadow">
                    J'ai de la chance
                </button>
            </div>
        </>
    );
}
