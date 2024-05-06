export default function Footer() {
   return (
      <footer className="absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full">
         <div className="flex flex-col sm:flex-row px-8 py-3 space-y-7 sm:space-y-0 border-b border-gray-300">
            <ul className="flex space-x-6">
               <li className="hover:underline cursor-pointer hover:text-gray-600">
                  À propos
               </li>
               <li className="hover:underline cursor-pointer hover:text-gray-600">
                  Paramètres
               </li>
            </ul>
         </div>
         <div className="flex items-center justify-center px-8 py-3 space-y-7 sm:space-y-0">
            <div className="flex items-center space-x-6">
               <a
                  href="https://google.ca"
                  className="hover:underline cursor-pointer hover:text-gray-600"
               >
                  Propulsé par Google
               </a>
            </div>
         </div>
      </footer>
   );
}
