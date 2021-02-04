import { Redirect, Route, Switch } from "react-router-dom";
import DetailProduct from "./components/detail-product";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Profit from "./pages/admin/profit";
import User from "./pages/admin/user";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Products from "./pages/products";

const App = () => {
  return (
    <main className="container">
      <Navbar />
      <Switch>
        <Route exact path="/home" component = {Home}/>
        <Route path="/products/:productId" component = {DetailProduct}/>
        <Route path="/products" component = {Products}/>
        <Route path="/about" component = {About}/>
        <Route path="/admin">
          <Dashboard/>
          <Route path="/admin/user" component={User}/>
          <Route path="/admin/profit" component={Profit}/>
        </Route>
        <Route path="/not-found" component = {NotFound}/>
        <Redirect exact from ="/" to = "/home"/>
        <Redirect to = "/not-found"/>
      </Switch>
    </main>
  );
};

export default App;
