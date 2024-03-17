// App.js
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Payment from './Components/Payment';
// import Signup from './Components/Signup';
import Filter from './Components/Filter';


function App() {
  return (
    <Router> {/* Wrap your components with Router */}
      <>
        <Navbar />
        {/* <Login /> */}
       {/*  <Signup /> */}
        <Payment />
        <Filter />
      </>
    </Router>
  );
}

export default App;
