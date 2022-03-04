import logo from './logo.svg';
import './App.css';
import AllBeer from './Components/AllBeer';
import RandomBeer from './Components/RandomBeer';
import NewBeer from './Components/NewBeer';
import OneBeer from './Components/OneBeer';
import HomePage from './Components/HomePage';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
  <div className="App">
  
   <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/beers" element={<AllBeer/>} />
    <Route path="/beers/:id" element={<OneBeer />} />
    <Route path="/random-beer" element={<RandomBeer />} />
    <Route path="/new-beer" element={<NewBeer />} />
   
   </Routes>
  </div>
  );
}

export default App;
