import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import SinglePost from "./pages/SinglePost";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Switch>

        <Route path = "/" exact>
          <Homepage/>
        </Route>

        <Route path = "/blog/:slug" children = {
          <SinglePost />
        }>
        </Route>

        <Route path = "/blog">
          <Blog/>
        </Route>

        <Route path = "*">
          <Error/>
        </Route>

      </Switch>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
