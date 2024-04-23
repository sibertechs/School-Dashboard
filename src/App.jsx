import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import FoodOrders from "./Pages/FoodOrders/FoodOrders";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Userdetails from "./Pages/Userdetails";
import PrivateRoutes from "./Components/PrivateRoutes/PrivateRoutes";
import CurrentAtiveStd from "./Pages/Current Ative Students/CurrentAtiveStd";
import CurrentRegisteredStudts from "./Pages/CurrentRegisteredStudents/CurrentRegisteredStudts";
import Graph from "./Pages/graph/graph";
import CurrentRegisteredStaff from "./Pages/CurrentRegisteredStaff/currentregisteredstaff";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/currentativestdts" element={<CurrentAtiveStd />} />
            <Route
              path="/currentregisteredstudts"
              element={<CurrentRegisteredStudts />}
            />
            <Route
              path="/currentregisteredstaff"
              element={<CurrentRegisteredStaff />}
            />
            <Route path="/graph" element={<Graph />} />
            <Route path="/foodorder" element={<FoodOrders />} />
            <Route path="/userdetails" element={<Userdetails />} />
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
