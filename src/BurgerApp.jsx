// eslint-disable-next-line no-unused-vars
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Waiter from "./pages/waiter/Waiter";
import Admin from "./pages/admin/Admin";
import Page404 from "./pages/404/Page404 ";
import Chef from "./pages/chef/chef";
import Order from "./pages/order/Order";
import AdminUsers from "./components/adminUsers/AdminUsers";

function BurgerApp() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Waiter" element={<Waiter />} />
      <Route path="/Chef" element={<Chef />} /> {/* Cambié la ruta a /Chef */}
      <Route path="/Order" element={<Order />} /> {/* Nueva ruta para Order */}
      <Route path="/Admin" element={<Admin />} />
      <Route path="/AdminUsers" element={<AdminUsers />} />
      <Route path="/Page404" element={<Page404 />} />
    </Routes>
  );
}

export default BurgerApp;
