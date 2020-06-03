import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./app.css";
import UseState from "./hooks-api/1-useState";
import UseEffect from "./hooks-api/2-useEffect";
import UseRef from "./hooks-api/3-useRef";
import UseImperativeHandle from "./hooks-api/4-useImperativeHandle";
import UseContext from "./hooks-api/5-useContext";
import UseCallback from "./hooks-api/6-useCallback";
import UseMemo from "./hooks-api/7-useMemo";
import UseReducer from "./hooks-api/8-useReducer";
import Demo from "./demo";

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
  {
    path: "/demo",
    component: Demo,
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
