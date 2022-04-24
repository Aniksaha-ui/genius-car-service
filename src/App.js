import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Services from "./components/Home/Services/Services";
import Header from "./components/Shared/Header/Header";
// import Footer from "./components/Shared/Footer/Footer";
import Contract from "./components/Contract/Contract";
import Home from "./components/Home/Home/Home";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Checkout from "./components/Checkout/Checkout";
import AddService from "./components/AddService/AddService";
import ManageService from "./components/ManageService/ManageService";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/services"
          element={
            <RequireAuth>
              <Services />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addservice"
          element={
            <RequireAuth>
              <AddService />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageService />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/service/:id"
          element={<ServiceDetails></ServiceDetails>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contract" element={<Contract></Contract>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
