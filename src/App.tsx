import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { Provider } from './context/provider';
import { SelectMenu } from './pages/SelectMenu';
import { ClientMenu } from './pages/ClientMenu';
import { ServerMenu } from './pages/ServerMenu';
import { CreateRoom } from './pages/CreateRoom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <Provider>
      <Router>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
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
