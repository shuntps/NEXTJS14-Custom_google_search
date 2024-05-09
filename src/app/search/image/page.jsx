import ImageSearchResults from "@/components/ImageSearchResults";

export default async function ImageSearchPage({ searchParams }) {
   const startIndex = searchParams.start || "1";

   await new Promise((resolve) => setTimeout(resolve, 1000));

   const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image`
   );

   if (!response.ok) throw new Error("Quelque chose s'est mal passé");

   const data = await response.json();
   const results = data.items;

   if (!results) {
      return (
         <div className="flex flex-col justify-center items-center py-10 px-8 text-sm text-gray-700">
            <h1 className="text-red-700 font-bold pb-5">
               Aucun résultat contenant tous vos termes de recherche n'a été
               trouvé.
            </h1>
            <p className="mb-5">
               Votre recherche de <b>{searchParams.searchTerm}</b> ne correspond
               à aucun document.
            </p>
            <p className="mb-5">Essayez de rechercher autre chose.</p>
         </div>
      );
   }
   return <div>{results && <ImageSearchResults results={data} />}</div>;
}
