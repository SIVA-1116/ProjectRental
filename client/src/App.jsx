import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';
import "antd/dist/reset.css";
import '@ant-design/v5-patch-for-react-19';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/bookingcar' element={<BookingCar/>} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
