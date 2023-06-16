import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { Provider } from './context/provider';
import { SelectMenu } from './pages/SelectMenu';
import { ClientMenu } from './pages/ClientMenu';
import { ServerMenu } from './pages/ServerMenu';
import { CreateRoom } from './pages/CreateRoom';

export default function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path='/' element={<SelectMenu />} />
          <Route path='/client' element={<ClientMenu />} />
          <Route path='/server' element={<ServerMenu />} />
          <Route path='/createroom' element={<CreateRoom />} />
        </Routes>
      </Router>
    </Provider>
  );
}
