import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'

// Imports for all the components
import Login from "../src/components/auth/Login"
import Navbar1 from './components/admin/Navbar';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/nav" element={<Navbar1 />} />
      </Routes>
    </Router>
  )
}

export default App
