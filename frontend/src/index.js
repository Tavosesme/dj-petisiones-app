import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DJRequests from './DJRequests'; // El archivo que acabamos de crear
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dj" element={<DJRequests />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
