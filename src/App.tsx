import HomePage from '@/pages/HomePage';
import PhotoPage from '@/pages/PhotoPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection-photo" element={<PhotoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
