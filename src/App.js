import "./App.css";
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Error from "./components/Error";

function App() {
  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
