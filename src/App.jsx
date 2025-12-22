import React from 'react';
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Dashboard from "./features/dashboard/pages/Dashboard";

function App() {
  return (
    <div>
      <Login />
      <Register />
      <Dashboard />
    </div>
  );
}

export default App;
