import React from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Navigation from "./components/Navbar";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Team from "./components/team/Team";

import DashboardContent from "./components/dashboard/DashboardContent";
import Analytics from "./components/dashboard/Analytics";
import Reports from "./components/dashboard/Reports";
import Settings from "./components/dashboard/Settings";
import { UserProvider } from "./context/UserContext";
import NewDevice from "./components/newdevice/NewDevice";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./auth/LoginButton";
import LandingPage from "./loginpage/LandingPage";

function App() {
  const { user } = useAuth0();
  return (
    <UserProvider>
      {!user ? (
        <div>
          <LandingPage />
        </div>
      ) : (
        <BrowserRouter>
          <div className="App">
            <Navigation />

            <Routes>
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="" element={<DashboardContent />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="reports" element={<Reports />} />
                <Route path="settings" element={<Settings />} />
              </Route>
              <Route path="/team" element={<Team />} />
              <Route path="/newDevice" element={<NewDevice />} />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </UserProvider>
  );
}

export default App;
