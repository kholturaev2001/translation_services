import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div >
              <h1 className="text-2xl font-bold text-red-500 underline">
                Hello world!
              </h1>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
