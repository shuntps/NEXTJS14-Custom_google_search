"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";

export default function SearchHeaderOptions() {
   const router = useRouter();
   const searchParams = useSearchParams();
   const searchTerm = searchParams.get("searchTerm");
   const pathname = usePathname();
   const selectTab = (tab) => {
      router.push(
         `/search/${
            tab === "Images" ? "image" : "web"
         }?searchTerm=${searchTerm}`
      );
   };

   return (
      <div
         className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52
      text-gray-700 text-sm"
      >
         <div
            onClick={() => selectTab("All")}
            className={`flex items-center space-x-1 border-b-4 border-transparent active:text-gray-700
            cursor-pointer pb-3 px-2 ${
               pathname === "/search/web" && "!text-gray-800 !border-gray-800"
            }`}
         >
            <AiOutlineSearch className="text-md" />
            <p>Tout</p>
         </div>
         <div
            onClick={() => selectTab("Images")}
            className={`flex items-center space-x-1 border-b-4 border-transparent active:text-gray-700
            cursor-pointer pb-3 px-2 ${
               pathname === "/search/image" && "!text-gray-800 !border-gray-800"
            }`}
         >
            <AiOutlineCamera className="text-md" />
            <p>Images</p>
         </div>
      </div>
   );
}
