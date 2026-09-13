import { Navigate, Route, Routes } from "react-router-dom";
import { Portfolio } from "./components/Home-Section/Portfolio";
import { AdminLogin } from "./components/Authentication/AdminLogin";
import { AdminDashboard } from "./components/Dashboard/AdminDashboard";
import DetailsCard from "./components/Dashboard/DetailsCard";
import ProtectedRoute from "./components/Authentication/ProtectedRoute";
import { Createadmin } from "./components/Authentication/Createadmin";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/login" element={<AdminLogin />} />
      {/* <Route path="/login/createAdmin" element={<Createadmin />} /> */}

      <Route
        path="/adminDash"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      >
 
        <Route
          path="details/:id"
          element={
            <ProtectedRoute>
              <DetailsCard />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
export default App;
