import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Welcome from './component/Welcome';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
};

export default App;
