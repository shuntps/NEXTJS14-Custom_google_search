"use client";

import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function HomeSearch() {
   const [input, setInput] = useState("");
   const [randomSearchLoading, setRandomSearchLoading] = useState(false);
   const router = useRouter();
   const handleSubmit = (e) => {
      e.preventDefault();
      if (!input.trim()) return;
      router.push(`/search/web?searchTerm=${input}`);
   };

   const randomSearch = async (e) => {
      setRandomSearchLoading(true);
      const response = await fetch("https://random-word-api.herokuapp.com/word")
         .then((res) => res.json())
         .then((data) => data[0]);
      if (!response) return;
      router.push(`/search/web?searchTerm=${response}`);
      setRandomSearchLoading(false);
   };

   return (
      <>
         <form
            onSubmit={handleSubmit}
            className="flex w-full px-5 py-3 mt-5 mx-auto max-w-[90%] sm:max-w-xl lg:max-w-2xl border border-gray-200
                rounded-full hover:shadow-lg hover:border-gray-300 focus-within:shadow-md transition-all"
         >
            <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
            <input
               type="text"
               className="flex-grow focus:outline-none"
               onChange={(e) => setInput(e.target.value)}
            />
            <BsFillMicFill className="text-lg text-gray-500" />
         </form>
         <div className="flex flex-col mt-8 space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4 justify-center">
            <button
               className="w-36 h-10 bg-gray-100 text-sm text-gray-800 rounded-lg hover:ring-gray-200 focus:outline-none
                    active:ring-gray-300 hover:shadow-md transition-shadow"
               onClick={handleSubmit}
            >
               Recherche Google
            </button>
            <button
               disabled={randomSearchLoading}
               className="w-36 h-10 bg-gray-100 text-sm text-gray-800 rounded-lg hover:ring-gray-200 focus:outline-none
                    active:ring-gray-300 hover:shadow-md transition-shadow disabled:opacity-80 disabled:shadow-sm"
               onClick={randomSearch}
            >
               {randomSearchLoading ? "Chargement..." : "J'ai de la chance"}
            </button>
         </div>
      </>
   );
}
