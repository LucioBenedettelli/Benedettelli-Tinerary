import Section from "./components/Section";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import NavigationBar from "./components/NavigationBar";
import Cities from "./components/Cities";
import Test from "./components/Test";
import Itineraries from "./components/Itineraries";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Section} />
          <Route path="/cities" component={Cities} />
          <Route path= "/itineraries/:id" component={Itineraries} />
          <Route path="/test" component={Test} />
        </Switch>
      </BrowserRouter>

    </>
  );
};

export default App;
