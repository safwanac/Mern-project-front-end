
import Navbar from "./Homepage/Navbar";
import { Route, Routes } from "react-router-dom";
import Register from "./Homepage/Register";
import Login from "./Homepage/Login";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Home from "./Homepage/Home";
import Booktable from "./Homepage/CRUD/Booktable";
import Bookcreation from "./Homepage/CRUD/Bookcreation";
import Read1 from "./Homepage/CRUD/Read1";
import Bookupdat from "./Homepage/CRUD/Bookupdat";
import Clienttable from "./Homepage/CLIENT/Clienttable";
import Createclient from "./Homepage/CLIENT/Createclient";
import Clientread from "./Homepage/CLIENT/Clientread";
import Clientupdate from "./Homepage/CLIENT/Clientupdate";
import Createcustomer from "./Homepage/CUSTOMER/Createcustomer";
import Customertable from "./Homepage/CUSTOMER/Customertable";
import Customerread from "./Homepage/CUSTOMER/Customerread";
import Customerupdate from "./Homepage/CUSTOMER/Customerupdate";
import Createteam from "./Homepage/TEAM/Createteam";
import Teamtables from "./Homepage/TEAM/Teamtables";
import Teamcard from "./Homepage/TEAM/Teamcard";
import Teamupdate from "./Homepage/TEAM/Teamupdate";
import Createorder from "./Homepage/ORDER/Createorder";
import Ordertable from "./Homepage/ORDER/Ordertable";
import Orderread from "./Homepage/ORDER/Orderread";
import Orderupdate from "./Homepage/ORDER/Orderupdate";
import Adminregi from "./Homepage/Adminregi";
import Adminlogin from "./Homepage/Adminlogin";
import Usercards from "./Homepage/Usercards";
import Usercart from "./Homepage/Usercart";

function App() {
  //   const navigate = useNavigate()
  // useEffect(() => {
  //   const localdata = JSON.parse(localStorage.getItem('project'))
  //   if (localdata) {
  //     navigate('/home')
  //   } else {
  //     navigate('/login')
  //   }
  // },)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/regi" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />

        <Route path="/table" element={<Booktable />} />
        <Route path="/book" element={<Bookcreation />} />
        <Route path="/read1/:id" element={<Read1 />} />
        <Route path="/update/:id" element={<Bookupdat />} />

        <Route path="/client" element={<Clienttable />} />
        <Route path="/createclient" element={<Createclient />} />
        <Route path="/readclient/:id" element={<Clientread />} />
        <Route path="/updateclient/:id" element={<Clientupdate />} />

        <Route path="/customer" element={<Customertable />} />
        <Route path="/createcustomer" element={<Createcustomer />} />
        <Route path="/customerread/:id" element={<Customerread />} />
        <Route path="/customerupdate/:id" element={<Customerupdate />} />

        <Route path="/createteam" element={<Createteam />} />
        <Route path="/team" element={<Teamtables />} />
        <Route path="/teamread/:id" element={<Teamcard />} />
        <Route path="/teamupdate/:id" element={<Teamupdate />} />

        <Route path="/createorder" element={<Createorder />} />
        <Route path="/order" element={<Ordertable />} />
        <Route path="/orderread/:id" element={<Orderread />} />
        <Route path="/orderupdate/:id" element={<Orderupdate />} />

        <Route path="/adminregi" element={<Adminregi />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/usercard" element={<Usercards />} />
        <Route path="/usercart" element={<Usercart/>} />
      </Routes>
    </div>
  );
}

export default App;
