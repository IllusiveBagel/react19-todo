import { Router, Route } from "./Router";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
        <Router>
            <Route href="/"><div>home</div></Route>
            <Route href="/login"><Login/></Route>
        </Router>
    </>
  )
}

export default App
