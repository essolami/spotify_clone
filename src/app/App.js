import "./styles.scss";
import routes from "../routes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import config from "../config";
import { Helmet } from "react-helmet";
import { SideBar } from "../components";
import '../theme/styles.scss'

function App() {
  return (
    <div className="App">
      <Helmet {...config.APP} />
      <SideBar/>
      <BrowserRouter>
        <Switch>
          {routes.map((route,i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
