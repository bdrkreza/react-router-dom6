import { useRoutes } from "react-router-dom";
import { routes } from "./admin/routes";
import AppRouter from "./AppRouter";

function App() {
  const routing = useRoutes(routes);
  return (
    <>
      {routing}
      <AppRouter />
    </>
  );
}

export default App;
