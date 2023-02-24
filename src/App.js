import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesTest from "./components/RoutesTest";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/new" element={<New />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/diary/:id" element={<Diary />}></Route>
        </Routes>
        <RoutesTest />
      </div>
    </BrowserRouter>
  );
}

export default App;
