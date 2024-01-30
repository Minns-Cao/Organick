import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routers/routers";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => {
            let Page = route.component
            return (
              <Route key={index} path={route.path} element={<Page/>} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
