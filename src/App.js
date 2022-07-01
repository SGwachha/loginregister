import './App.css'
import Navbar from './navbar/Navbar';
import Routing from './routing/Routing';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="app">
      <ToastContainer/>
      <Navbar/>
      <Routing/>
    </div>
  );
}

export default App;
