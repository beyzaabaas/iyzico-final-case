import { Route, Routes } from "react-router-dom";
import "./App.css";
import Pages from "../src/pages/index";
import StarDetail from "./pages/starDetail/StarDetail";

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <Routes>
        <Route path="/*" element={<Pages />} />
        <Route path="starships/:id" element={<StarDetail />}></Route>
      </Routes>
      {/* <StarDetail></StarDetail> */}
    </div>
  );
}

export default App;
