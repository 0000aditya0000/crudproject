
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";

function App() {
  const endpoint = "https://65a5024752f07a8b4a3e2676.mockapi.io/api/v1/crud-operation";
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create url={endpoint} />}></Route>
          <Route path="/read" element={<Read url={endpoint}/>}></Route>
          <Route path="/update" element={<Update url={endpoint}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;