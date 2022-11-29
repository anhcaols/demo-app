import { publicRoutes } from "./routes";
import { Routes, Route } from "react-router-dom";

function App() {
  console.log(publicRoutes);
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        const Page = route.component;
        return <Route key={index} path={route.path} element={<Page />}></Route>;
      })}
    </Routes>
  );
}

export default App;
