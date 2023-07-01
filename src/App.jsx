import { Route, Routes } from "react-router";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<div>This is the mani page</div>} />
      </Routes>
    </>
  );
}

export default App;
