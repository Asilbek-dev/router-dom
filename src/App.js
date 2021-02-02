// import { Route, Switch } from "react-router-dom";
// import Navbar from "./components/navbar";
// import {About, Admin, Home, Posts} from "./pages"

import { Route, Switch } from "react-router-dom";
import NavBar from "./components/nav-bar";
import { Home, Products, Login, SignUp, ProductAbout } from "./homework";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route exact path="/product-about" component={ProductAbout} />
      </Switch>

      
      {/* <Navbar/>
      <Switch>
        <Route exact path="/" component={About}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/home" render = {() => <Home newTestProps = {{name: "Asilbek"}}/>} />
        <Route path="/posts" component={Posts}/>
      </Switch> */}
    </div>
  );
}

export default App;
