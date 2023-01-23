import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Header } from "./Components/Header/index.jsx";

const Home = lazy(() => import("./Pages/Home/index.jsx"));
const PageNotFound = lazy(() => import("./Pages/404/index"));

function App() {
  return (
    <div className="App" style={{transition: "3s", backgroundColor: "var(--main-background-color)"}}>
      {/* Start Header */}
      <Header />
      {/* End Header */}
      <div className="container">
        <Suspense>
          <Routes>
            <Route path="/" element={<Home pageTitle="Ibrahim Nasri - Home" />}></Route>
            <Route path="*" element={<PageNotFound pageTitle="Page Not Found" />}></Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
