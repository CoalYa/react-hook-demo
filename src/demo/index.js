import React, { useRef, useMemo } from "react";
import "./index.css";
import useInput from "./useInput";
import { useData } from "./useData";

const Input = (props) => {
  const refInput = useRef();
  return (
    <input
      type="text"
      ref={refInput}
      onKeyUp={props.onKeyUp}
      onChange={props.onChange}
    />
  );
};

// const list = [
//   {
//     name: "vue",
//     url: "https://github.com/vuejs/vue",
//     updated_at: "2020-06-02T14:49:28Z",
//     desc: "Vue.js is a progressive, incrementally-adoptable",
//   },
//   {
//     name: "vue",
//     url: "https://github.com/vuejs/vue",
//     updated_at: "2020-06-02T14:49:28Z",
//     desc: "Vue.js is a progressive, incrementally-adoptable",
//   },
// ];

const Box = ({ list }) => {
  return (
    <ul className="my-box">
      {list.map((v) => {
        return (
          <li>
            <a href={v.url}>{v.name}</a>
            <span>{v.updated_at}</span>
            <p>{v.desc}</p>
          </li>
        );
      })}
    </ul>
  );
};

const computedList = (data) => {
  console.log("computed");
  let { items } = data,
    list = [];
  if (items) {
    list = items.map((item) => {
      return {
        name: item.name,
        url: item.html_url,
        updated_at: item.updated_at,
        desc: item.description,
      };
    });
  }
  return list;
};

const App = () => {
  let [val, onChange] = useInput();
  let [data, doFetch] = useData();
  const list = useMemo(() => computedList(data), [data]);
  return (
    <div>
      <Input
        onChange={onChange}
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            doFetch(
              `https://api.github.com/search/repositories?q=${val}&sort=stars&order=desc&page=1`
            );
          }
        }}
      />
      <Box list={list} />
    </div>
  );
};

export default App;
