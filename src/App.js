import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Lists from "./Pages/List/Lists";
import Hotel from './Pages/Hotel/Hotel';
import Login from "./Components/Login/Login";
import Signup from "./Components/SignUp/SignUp";

function App() {
  return (
   
    <BrowserRouter>
    
    <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/hotels" element={<Lists/>}></Route>
      <Route path="/hotels/:id" element={<Hotel/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
    </Routes>

    
    </BrowserRouter>



  );
}

export default App;
