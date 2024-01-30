import React, { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Navigation from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Team from "./components/team/Team";
import Overview from "./components/dashboard/Overview";
import Analytics from "./components/dashboard/Analytics";
import Reports from "./components/dashboard/Reports";
import Settings from "./components/dashboard/Settings";
import { UserProvider } from "./context/UserContext";
import NewDevice from "./components/newdevice/NewDevice";

import LandingPage from "./loginpage/LandingPage";
import { auth } from "./config/firebase";
import Welcoming from "./components/welcoming/Welcoming";
import ConnectToDevice from "./components/connect/ConnectToDevice";
import Footer from "./components/Footer";
import {
  requestPermission,
  showNotification,
} from "./notification/notification";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

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
              <Route path="/" element={<Welcoming />} />
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="" element={<Overview />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="reports" element={<Reports />} />
                <Route path="settings" element={<Settings />} />
              </Route>
              <Route path="/team" element={<Team />} />
              <Route path="/newDevice" element={<NewDevice />} />
              <Route path="/connectDevice" element={<ConnectToDevice />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      )}
    </UserProvider>
  );
}

export default App;
