import { lazy, useState, useCallback, useEffect, Suspense } from "react";
import {
  Redirect,
  Route,
  useLocation,
  Switch,
  HashRouter as Router,
} from "react-router-dom";
import GithubCorner from "./components/GithubCorner";
import menu from "./data/menu.json";
import "./App.css";

import Header from "./components/Header";
import Menu from "./components/Menu";
import ButtonMenu from "./components/ButtonMenu";
 
const ChangeTitle = ({ title }) => {
  const titleName = title.replace(/-/g, " ");
  useEffect(() => {
    document.title = titleName;
  }, [titleName]);

  return <h2 className="title">EYS MAP PROTOTIP - 1</h2>;
};

const Info = ({ info }) => {
  const { info: infoText } = menu.find((item) => item.link === info);

  return infoText ? (
    <small dangerouslySetInnerHTML={{ __html: infoText }} />
  ) : (
    ""
  );
};

const Child = ({ info, id, text }) => {
  const location = useLocation();
  const LoadComponent = lazy(() =>
    import(
      /* webpackChunkName: "[request]" */ `./pages${location.pathname}.js`
    ).catch(() => import("./components/NotFound.js"))
  );

  const ShowSource = () => (
    <div className="info-container">
      <small>
        
      </small>
      <Info info={location.pathname.replace(/\//, "")} />
    </div>
  );

  return (
    <>
      <ChangeTitle title={location.pathname.replace(/\//, " ")} />
      <LoadComponent />
      <ShowSource />
    </>
  );
};

function App() {
  const [info, setInfo] = useState("");
  const [id, setID] = useState("");
  const [text, setText] = useState("");
  const callback = useCallback((id, text, info) => {
    setInfo(info);
    setID(id);
    setText(text);
  }, []);

  return (
    <Router>
      <div className="grid">
        <Menu parentCallback={callback} />
      
        <main id="section-example">
          <Suspense fallback={<div>yükleniyor...</div>}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/svg-markers-width-legends" />
              </Route>
              <Route
                path="/:id"
                children={<Child id={id} info={info} text={text} />}
              />
            </Switch>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}
 

export default App;
