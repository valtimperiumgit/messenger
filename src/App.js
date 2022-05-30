import './App.css';
import { BrowserRouter as Router, Outlet } from 'react-router-dom';
import AppRouter from './routing/AppRouter';


function App() {
  return (
    <div>
      <Router>
        <AppRouter/>
      </Router>

      <Outlet/>
    </div>
  );
}

export default App;
