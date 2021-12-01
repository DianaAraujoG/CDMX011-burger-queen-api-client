import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LogIn from './pages/LogIn/LogIn';
import Menu from "./pages/menu/Menu";
import OrderToDeliver from "./pages/ordersToDeliver/OrdersToDeliver";
import Kitchen from './pages/Kitchen/Kitchen';
import Register from './pages/Register/Register'
import AdminProducts from './pages/AdminProducts/AdminProducts'
// import { auth } from './FirebaseConfig';

// import { useNavigate } from 'react-router-dom';

function App() {
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       onNavigate(window.location.pathname);
//     } else {
//       onNavigate('/');
//     }
//   })

  return (
    <Router>
      <div>
       <Routes>
        <Route path='/' element={<LogIn/>} />
        <Route path='register' element={<Register/>} />
        <Route path='adminProducts' element={<AdminProducts/>} />
        <Route path='menu' element={<Menu/>} />
        <Route path='orderToDeliver' element={<OrderToDeliver/>} />
        <Route path='kitchen' element={<Kitchen/>} />
       </Routes>
       </div>
    </Router>
  );
}

export default App;
