import { Routes, Route } from 'react-router-dom';
import Home from '././pages/Home';
import MedigerList from './pages/MedigerList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/MedigerList" element={<MedigerList />} />
      {/* <Route path="/" element={<MedigerList />} /> */}
    </Routes>
  );
}

export default App;
