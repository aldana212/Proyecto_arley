import { Home } from './pages/home';
import { Adm_tren } from './pages/adm_tren';
import { Adm_Users } from './pages/adm_Users';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <Router>
         <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/HomeAdmin" element={< Adm_tren />} />
            <Route path="/HomeUser" element={< Adm_Users />} />
         </Routes>
      </Router>
    </>
  );
}
export default App;
