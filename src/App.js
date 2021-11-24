import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import SignUp from './components/SingUp'
import LogIn from './pages/LogIn/LogIn'
import Menu from "./pages/menu/Menu";
import OrderToDeliver from "./pages/ordersToDeliver/OrdersToDeliver";
// import { auth } from './FirebaseConfig';

// import { useNavigate } from 'react-router-dom';

function App() {
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       onNavigate(window.location.pathname);
//     } else {
//       onNavigate('/');
//     }
//   });

  // const navigate = useNavigate();
  // auth.onAuthStateChanged((user)=>{
  //   if(user){
  //     navigate("/menu");
  //   }else {
  //     navigate('/');
  //   }
  // })
  return (
    <Router>
      <div>
       <Routes>
        <Route path='/' element={<LogIn/>} />
        <Route path='register' element={<SignUp/>} />
        <Route path='menu' element={<Menu/>} />
        <Route path='orderToDeliver' element={<OrderToDeliver/>} />

       </Routes>
       </div>
    </Router>
  );
}

export default App;
