import { Router, Route } from "./Router";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Router>
        <Route href="/">
          <Home />
        </Route>
        <Route href="/login">
          <Login />
        </Route>
      </Router>
    </>
  );
};

export default App;
