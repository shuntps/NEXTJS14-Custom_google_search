import "./../globals.css";
import SearchHeader from "@/components/SearchHeader";

export default function layout({ children }) {
   return (
      <div>
         <SearchHeader />
         {children}
      </div>
   );
}
