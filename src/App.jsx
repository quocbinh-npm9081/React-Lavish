import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './components/pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/React-Lavish" element={<Home/>} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
