import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./Pages/Home/index.jsx"));
const Introduction = lazy(() => import("./Pages/Introduction/index.jsx"));
const Terminal = lazy(() => import("./Pages/Terminal/index.jsx"));
const PageNotFound = lazy(() => import("./Pages/404/index"));

function App() {
  return (
    <div className="App" style={{transition: "3s", backgroundColor: "var(--main-background-color)"}}>
      <div className="container">
        <Suspense>
          <Routes>
            <Route path="/" element={<Home pageTitle="Ebrahim Massrie - Home" />}></Route>
            <Route path="/introduction" element={<Introduction pageTitle="Ebrahim Massrie - Introduction" />}></Route>
            <Route path="/terminal" element={<Terminal pageTitle="Ebrahim Massrie - Terminal" />}></Route>
            <Route path="*" element={<PageNotFound pageTitle="Page Not Found" />}></Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
