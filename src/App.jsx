import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import WebsiteLayout from "./Layout/WebsiteLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route path="/iphone" element={<h1>Iphone Page</h1>} />
          <Route path="/mac" element={<h1>MacBook page</h1>} />
          <Route path="/imac" element={<h1>Imac page</h1>} />
          <Route path="/apple-watch" element={<h1>Apple Watch</h1>} />
          <Route path="/phu-kien" element={<h1>Phu kien page</h1>} />
          <Route path="/tin-tuc" element={<h1>Tin Tuc</h1>} />
          <Route path="/dich-vu" element={<h1>Dich vu</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
