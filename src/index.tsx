import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Gallery } from './pages/gallery';
import { Detail } from './pages/detail';
import { NotFound } from './pages/notFound';
import { Backoffice } from './pages/backoffice';

import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="detail" element={<Detail />} />
        <Route path="backoffice" element={<Backoffice />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(<App />);
