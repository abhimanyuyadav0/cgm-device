import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { appRoutes } from "./routers";
import DashboardLayout from "./components/layouts/DashboardLayout";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          {appRoutes.map(({ path, element }, idx) => (
            <Route key={idx} path={path} element={element} />
          ))}
        </Routes>
        <ToastContainer />
      </DashboardLayout>
    </Router>
  );
}

export default App;
