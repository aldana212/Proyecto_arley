import { Home } from './pages/home';
import { Home_admin } from './pages/home_admin';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <Router>
         <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/HomeAdmin" element={< Home_admin />} />
         </Routes>
      </Router>
    </>
  );
}
export default App;
