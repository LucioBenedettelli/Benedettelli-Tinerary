import Section from "./components/Section";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Header from "./components/Header";
import Cities from "./components/Cities";
import Page3 from "./components/Page3";
import Itineraries from "./components/Itineraries";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Section} />
          <Route path="/cities" component={Cities} />
          <Route path= "/itineraries/:id" component={Itineraries} />
          <Route path="/test" component={Page3} />
        </Switch>
      </BrowserRouter>

    </>
  );
};

export default App;
