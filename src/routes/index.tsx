import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Trucks from '../pages/Trucks';
import Drivers from '../pages/Drivers';
import Orders from '../pages/Orders';
import Reports from '../pages/Reports';
import Settings from '../pages/Settings';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/trucks" element={<Trucks />} />
      <Route path="/drivers" element={<Drivers />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes; 