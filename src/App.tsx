import './App.css';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';
import { ToastContainer } from "react-toastify";
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <div className="App">
  <ToastContainer/>
<Router>
  <Routes>
    <Route path='/' element={<Login/>}></Route>
<Route path='/register' element={<Register/>}/>
     <Route path="/home" element={<Home/>} />
<Route path="*" element={<PageNotFound/>} ></Route>

  </Routes>
</Router>


    </div>
  );
}

export default App;
