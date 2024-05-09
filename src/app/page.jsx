import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";

export default function page() {
   return (
      <>
         <HomeHeader />
         <div className="flex flex-col items-center mt-64">
            <h1 className="text-6xl text-gray-700 font-bold mb-2">
               {process.env.SITE_NAME}
            </h1>
            <HomeSearch />
         </div>
      </>
   );
}
