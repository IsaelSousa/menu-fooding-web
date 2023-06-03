import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { SelectMenu } from './pages/SelectMenu';
import { ClientMenu } from './pages/ClientMenu';
import { ServerMenu } from './pages/ServerMenu';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SelectMenu />} />
        <Route path='/client' element={<ClientMenu />} />
        <Route path='/server' element={<ServerMenu />} />
      </Routes>
    </Router>
  );
}
