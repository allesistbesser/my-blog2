import { useContext } from "react";
import {BlogContext} from "../context/BlogContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Details from "../pages/Details.js";
import Register from "../pages/Register.js"
import Cards from "../components/Cards";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import UpdateBlog from "../pages/UpdateBlog";




const AppRouter = () => {

  const {islogin, BlogItem} = useContext(BlogContext)
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          {islogin ? <Route path="/details" component={Details} />: null}
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          {islogin ? <Route path="/newblog" component={NewBlog} /> : null}
          {islogin && BlogItem ? <Route path="/updateblog" component={UpdateBlog} /> : null}
          <Route path="/" component={Cards} />

        </Switch>
      </Router>
      
    </div>
  );
};

export default AppRouter;
