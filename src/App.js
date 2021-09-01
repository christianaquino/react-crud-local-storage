import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import FichaMedicaProvider from "./providers/FichaMedica";

import List from "./components/list";
import New from "./components/new";
import Edit from "./components/edit";

function App() {
  return (
    <FichaMedicaProvider>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link to={"/"} className="navbar-brand">
            Registros Médicos
          </Link>
        </div>
      </nav>
      <div className="py-4">
        <Switch>
          <Route exact path={["/", "/list"]} component={List} />
          <Route exact path="/new" component={New} />
          <Route path="/edit/:id" component={Edit} />
        </Switch>
      </div>
    </FichaMedicaProvider>
  );
}

export default App;
