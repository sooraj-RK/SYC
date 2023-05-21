import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen';
import CarViewScreen from './Components/CarViewScreen';
function App() {
  return (
    <BrowserRouter>
    <div>
      <header >
        <Link to="/"><strong>SYC</strong></Link>
      </header>
      <main>
        <Routes>
          <Route path="/product/:slug" element={<CarViewScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </main>
      <footer>
          <div className="text-center">All rights reserved SYC</div>
        </footer>
    </div>
  </BrowserRouter>
  );
}

export default App;