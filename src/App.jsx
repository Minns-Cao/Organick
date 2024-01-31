import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routers/routers";
import DefaultLayout from "./layout/DefaultLayout/DefaultLayout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => {
            let Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <DefaultLayout>
                    <Page />
                  </DefaultLayout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
