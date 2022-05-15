import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cartprovider } from './providers/cartProvider';
import {Header} from './components/header'
import { Men } from './page/men';
import { Women } from './page/women';
import {Kids} from './page/kids'
import {ProductScreen} from './components/productsItem/ProductScreen'
import {ProductsItem}from './components/productsItem/ProductsItem'

function App() {
  return (
    <BrowserRouter>
   
      <Cartprovider>
      <Header/>
      <Routes>
      <Route path="/" element={<ProductScreen />}/>
      <Route path='men' element={<Men/>}index/>
      <Route path='women' element={<Women/>}/>
      <Route path='kids' element={<Kids/>}/>
      <Route path='productsItem' element={<ProductsItem/>}/>
      </Routes>    


      </Cartprovider>

    </BrowserRouter>
  );
}

export default App;
