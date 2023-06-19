import { useState } from "react";
import { Header } from "./components/Header";
import { SearchForm } from "./components/Header/SearchForm";

function App() {
   const [search, setSearch] = useState("");
   //Prop drilling
   //console.log("O App renderizou");
  

   return (
      <div className="App">
         {/* composição consiste na passagem de componentes como pros e existe para reduzir a quantidade de passagens bem como melhorar levemente a perfomance */}
         {/* <Header searchForm={<SearchForm search={search} setSearch={setSearch} />} /> */}
         <Header>
            <SearchForm search={search} setSearch={setSearch} />
         </Header>
         {/* lista */}
      </div>
   );
}

export default App;
