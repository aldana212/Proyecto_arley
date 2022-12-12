import { Home } from "./pages/home";
import { Adm_tren } from "./pages/adm_tren";
import { Adm_Users } from "./pages/adm_Users";
import { Home_Users } from "./pages/home_Users";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./components/PageNotFound";
import { InfoUser } from "./pages/PageInfoUser";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/HomeAdmin" element={<Adm_tren />} />
          <Route path="/AdminUser" element={<Adm_Users />} />
          <Route path="/HomeUsers" element={<Home_Users />} />
          <Route path="/InfoUser" element={<InfoUser />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
