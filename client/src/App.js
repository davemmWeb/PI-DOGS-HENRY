import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ButtonHome from "./components/buttonHome/ButtonHome";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";

function App() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="App">
      {pathname === "/" ? (
        <Routes>
          <Route path="/" element={<ButtonHome />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
