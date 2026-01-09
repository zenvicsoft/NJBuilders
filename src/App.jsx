import { RouterProvider } from "react-router-dom";
import MainRouter from "./routes/MainRouter";

function App() {
  return (
    <>
      <RouterProvider router={MainRouter} />
    </>
  );
}

export default App;
