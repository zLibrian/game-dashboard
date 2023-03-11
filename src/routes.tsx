import { Route, Routes as Router } from 'react-router-dom';
import Home from './Pages/Home';

export function Routes() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
    </Router>
  );
}
