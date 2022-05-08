import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddItem from './Pages/AddInventoryItem/AddItem';
import Login from './Pages/Authentication/Login/Login';
import Reg from './Pages/Authentication/Registration/Reg';
import DeliveryItem from './Pages/Authentication/Require Auth/DeliveryItems/DeliveryItem';
import RequireAuth from './Pages/Authentication/Require Auth/RequireAuth';
import Blog from './Pages/Blog/Blog';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import ManageInventory from './Pages/ManageInventory/ManageInventory.js';
import NotFound from './Pages/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/manageInventory' element={<ManageInventory/>}></Route>
        <Route path='/bikes/:itemId' element={<DeliveryItem/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/AddItem' element={<AddItem/>}></Route>
        <Route path='/signup' element={<Reg/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
