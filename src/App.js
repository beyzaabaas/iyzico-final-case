import { Route, Routes } from "react-router-dom";
import "./App.css";

import StarDetail from "./pages/starDetail/StarDetail";
import StarHeader from "./pages/layout/StarHeader";
import StarContent from "./pages/layout/StarContent";

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <StarHeader />
      <Routes>
        <Route path="/" index element={<StarContent />} />
        {/* <Route path="/*" element={<Pages />} /> */}
        <Route path="starships/:id" element={<StarDetail />}></Route>
      </Routes>
      {/* <StarDetail></StarDetail> */}
    </div>
  );
}

export default App;
