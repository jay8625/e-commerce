import Header from './components/Header';
import SideBar from './components/SideBar';
import ProductList from './components/ProductList';
import { useState } from 'react';

function App() {
  const [brandFilter, setBrandFilter] = useState<string[]>([])

  const handleFilters =(event:boolean,brand:string)=>{
      let addedFilters;
      if(event){
          addedFilters=[...brandFilter,brand]
      }
      else{
          addedFilters=[...brandFilter].filter(x=>x!==brand)
      }
      setBrandFilter(addedFilters)
  }
  return (
    <>
      <Header />
      <div className="d-flex col-12">
        <template className="position-fixed col-3 bg-light h-100 overflow-auto hide-scrollbar d-none d-md-block">
          <SideBar
            brandFilter={brandFilter}
            handleFilters={handleFilters}
            clearFilters={() => setBrandFilter([])}
          />
        </template>
        <ProductList brandFilter={brandFilter}/>
      </div>
    </>
  );
}

export default App;

