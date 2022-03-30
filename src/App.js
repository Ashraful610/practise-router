import './App.css';
import Header from './Components/Header/Header';
import {Routes ,Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import ProductDetail from './Components/ProductDetail/ProductDetail';
function App() {
  return (
    <div className="App">
      <Header></Header>
         <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/products' element={<Products></Products>}></Route>
              <Route path="/product/:productId" element={<ProductDetail></ProductDetail>}></Route>
              <Route path='/Contact' element={<Contact></Contact>}></Route>
              <Route path='/about' element={<About></About>}></Route>
              <Route path='*' element={<NotFound></NotFound>}></Route>
         </Routes>
    </div>
  );
}

export default App;
