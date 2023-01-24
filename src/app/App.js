import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./components/home"
import Dashboard from "./components/dashboard"
import Login from "./components/login"
import Posts from "./components/posts"
import NotFound from "./components/notFound";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>App</h1>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/dashboard"} component={Dashboard} />
        {/* <Route path={"/dashboard"} render={(props) => <Dashboard isAdmin={false} {...props} />}/> */}
        <Route path={"/login"} component={Login} />
        <Route path={"/posts/:postId?"} component={Posts} />
        <Route path={"/404"} component={NotFound} />
        <Redirect from="/admin" to={"/dashboard"}/>
        <Redirect to={"/404"} />
        {/* <Route component={NotFound} /> по дефолту можно было так написать в самом конце*/}
      </Switch>
    </div>
  );
}

export default App;
