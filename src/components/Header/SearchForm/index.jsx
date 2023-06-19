export const SearchForm = ({ search, setSearch }) => {
   return (
      <>
         <form>
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" />
         </form>
         <p>Resultados de busca para: {search}</p>
      </>
   );
};
