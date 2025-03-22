import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculator from "./pages/Calculator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Calculator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
