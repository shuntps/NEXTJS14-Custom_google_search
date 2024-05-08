"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
   useEffect(() => {
      console.log("error", error);
   }, [error]);

   return (
      <div className="flex flex-col justify-center items-center pt-10">
         <h1 className="mb-4 text-red-700 font-bold">
            Quelque chose s'est mal passé
         </h1>
         <button className="text-gray-700 hover:text-gray-900 hover:underline">
            Essayer à nouveau
         </button>
      </div>
   );
}
