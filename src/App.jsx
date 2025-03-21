import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<div className="font-bold">test</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
