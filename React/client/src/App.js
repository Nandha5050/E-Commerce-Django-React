
import './App.css';
import { ShowProducts } from './components/ShowProducts';
import { AddProducts } from './components/AddProducts';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Navbarmenu } from './components/Navbarmenu';
import { ProductsDetails } from './components/ProductsDetails';
import { UpdateProduct } from './components/UpdateProduct';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbarmenu/>
        <Routes>
          <Route path='/' element={<ShowProducts/>}/>
          <Route path='/add' element={<AddProducts/>}/>
          <Route path='/:id/' element={<ProductsDetails/>}/>
          <Route path='/:id/update/' element={<UpdateProduct/>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
