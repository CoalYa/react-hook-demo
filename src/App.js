import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./app.css";
import UseState from "./example/1-useState";
import UseEffect from "./example/2-useEffect";
import UseRef from "./example/3-useRef";
import UseImperativeHandle from "./example/4-useImperativeHandle";
import UseContext from "./example/5-useContext";
import UseCallback from "./example/6-useCallback";
import UseMemo from "./example/7-useMemo";
import UseReducer from "./example/8-useReducer";

const routes = [
  {
    path: "/useState",
    component: UseState,
  },
  {
    path: "/useEffect",
    component: UseEffect,
  },
  {
    path: "/useRef",
    component: UseRef,
  },
  {
    path: "/useImperativeHandle",
    component: UseImperativeHandle,
  },
  {
    path: "/useContext",
    component: UseContext,
  },
  {
    path: "/useCallback",
    component: UseCallback,
  },
  {
    path: "/useMemo",
    component: UseMemo,
  },
  {
    path: "/useReducer",
    component: UseReducer,
  },
];

export default () => {
  return (
    <Router>
      <div className="app">
        <nav>
          <ol>
            {routes.map((v) => {
              return (
                <li key={v.path}>
                  <Link to={v.path}>{v.path.replace("/", "")}</Link>
                </li>
              );
            })}
          </ol>
        </nav>
        <Switch>
          {routes.map((route, i) => {
            return (
              <Route
                path={route.path}
                key={i}
                render={(props) => <route.component {...props} />}
              />
            );
          })}
        </Switch>
      </div>
    </Router>
  );
};
