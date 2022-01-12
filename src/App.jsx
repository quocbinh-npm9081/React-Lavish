import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './components/pages/home/Home';
import Products from './components/pages/products/Products';
import Services from './components/pages/services/Services';
import SignUp from './components/pages/signUp/SignUp';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/sign-up" element={<SignUp/>} />

        <Route exact path="/React-Lavish" element={<Home/>} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
