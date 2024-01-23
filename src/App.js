import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lemonade from './Lemonade';
import Lobster from './Lobster';
import Pizza from './Pizza';
import VendingMachine from './VendingMachine';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<VendingMachine/>} />
          <Route path='/pizza' element={<Pizza/>} />
          <Route path='/lemonade' element={<Lemonade/>} />
          <Route path='/lobster' element={<Lobster/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
