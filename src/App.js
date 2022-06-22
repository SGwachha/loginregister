// import './App.css';
import Navbar from './navbar/Navbar';
import Routing from './routing/Routing';
// import {ToastContainer} from 'react-toastify'

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <ToastContainer/> */}
      {/* remove this comment */}
      <Routing/>
    </div>
  );
}

export default App;
