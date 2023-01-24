import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./Pages/Home/index.jsx"));
const ControlPanel = lazy(() => import("./Pages/control_panel/index.jsx"));
const Terminal = lazy(() => import("./Pages/Terminal/index.jsx"));
const PageNotFound = lazy(() => import("./Pages/404/index"));

function App() {
  return (
    <div className="App" style={{transition: "3s", backgroundColor: "var(--main-background-color)"}}>
      <div className="container">
        <Suspense>
          <Routes>
            <Route path="/" element={<Home pageTitle="Ebrahim Massrie - Home" />}></Route>
            <Route path="/control-panel" element={<ControlPanel pageTitle="Ebrahim Massrie - Control Panel" />}></Route>
            <Route path="/terminal" element={<Terminal pageTitle="Ebrahim Massrie - Terminal" />}></Route>
            <Route path="*" element={<PageNotFound pageTitle="Page Not Found" />}></Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
