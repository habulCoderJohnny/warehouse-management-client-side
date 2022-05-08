import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddItem from './Pages/AddInventoryItem/AddItem';
import Login from './Pages/Authentication/Login/Login';
import Reg from './Pages/Authentication/Registration/Reg';
import DeliveryItem from './Pages/Authentication/Require Auth/DeliveryItems/DeliveryItem';
import Blog from './Pages/Blog/Blog';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import ManageInventory from './Pages/ManageInventory/ManageInventory.js';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/manage' element={<ManageInventory/>}></Route>
        <Route path='/inventory/:itemId' element={<DeliveryItem/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/AddItem' element={<AddItem/>}></Route>
        <Route path='/signup' element={<Reg/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/about' element={<Reg/>}></Route>
        <Route path='*' element={<Reg/>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
