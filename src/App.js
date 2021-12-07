import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LogIn from './pages/LogIn/LogIn';
import Menu from "./pages/menu/Menu";
import OrderToDeliver from "./pages/ordersToDeliver/OrdersToDeliver";
import Kitchen from './pages/Kitchen/Kitchen';
import AdminUsers from './pages/AdminUsers/AdminUsers'
import AdminProducts from './pages/AdminProducts/AdminProducts'

function App() {
  return (
    <Router>
      <div>
       <Routes>
        <Route path='/' element={<LogIn/>} />
        <Route path='adminUsers' element={<AdminUsers/>} />
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
