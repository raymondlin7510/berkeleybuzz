import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './pages/Events';
import AddEvent from './components/AddEvent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/add-event" element={<AddEvent />} />
      </Routes>
    </Router>
  );
}

export default App; 