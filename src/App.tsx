import { Router, Route } from "./Router";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Router>
        <Route href="/">
          <Home />
        </Route>
      </Router>
    </>
  );
};

export default App;
