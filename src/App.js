// App.js
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
// import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';

function App() {
  return (
    <Router> {/* Wrap your components with Router */}
      <>
        <Navbar />
        <Signup/>
      </>
    </Router>
  );
}

export default App;
