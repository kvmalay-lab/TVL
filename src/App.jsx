import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import WorkoutSession from './pages/WorkoutSession';
import History from './pages/History';

function App() {
  return (
    <Router>
      <Routes>
        {/* Marketing landing page at root */}
        <Route path="/" element={<LandingPage />} />

        {/* Existing app moved to /app/* routes */}
        <Route path="/app/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/app/history" element={<Layout><History /></Layout>} />
        <Route path="/app/workout" element={<WorkoutSession />} />

        {/* Redirects for backwards compatibility */}
        <Route path="/dashboard" element={<Navigate to="/app/dashboard" replace />} />
        <Route path="/history" element={<Navigate to="/app/history" replace />} />
        <Route path="/workout" element={<Navigate to="/app/workout" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
