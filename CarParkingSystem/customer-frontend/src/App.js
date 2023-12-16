import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { NavigationBar } from './compnents/NavigationBar';
import { AboutUs } from './compnents/AboutUs';
import { ContactUs } from './compnents/ContactUs';
import { Home } from './compnents/Home';
import { BookingForm } from './compnents/BookingForm';
import { BookingList } from './compnents/BookingList';
import { EditCustomerForm } from './compnents/EditCustomerForm';
import { Login } from './compnents/Login';
import { PrivateRoute } from "./compnents/PrivateRoute";
import { RedirectIfLoggedIn } from "./compnents/RedirectIfLoggedIn";
import { Register } from './compnents/Register';



function App() {
  return (
    <BrowserRouter>

      <Routes>
     
        <Route path="/" element={<RedirectIfLoggedIn><Login/></RedirectIfLoggedIn>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        
        <Route path='/home' element={<PrivateRoute><Home/></PrivateRoute>}></Route>
        <Route path='/aboutus' element={<PrivateRoute><AboutUs /></PrivateRoute>}></Route>
        <Route path='/contactus' element={<PrivateRoute><ContactUs /></PrivateRoute>}></Route>
        <Route path='/booklist' element={<PrivateRoute><BookingList /></PrivateRoute>}></Route>
        <Route path='/booknow' element={<PrivateRoute><BookingForm /></PrivateRoute>}></Route>
        <Route path='/edit/:slot' element={<PrivateRoute><EditCustomerForm/></PrivateRoute>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
