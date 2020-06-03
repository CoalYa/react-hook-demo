import React, { useContext, useState } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = React.createContext({
  theme: themes.light,
  toggle: () => {},
});

const SubChild = () => {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <ThemeContext.Consumer>
      {(val) => {
        console.log(val);
        return null;
      }}
    </ThemeContext.Consumer>
    // <div>
    //   <button
    //     onClick={toggle}
    //     style={{ background: theme.background, color: theme.foreground }}
    //   >
    //     hello world
    //   </button>
    // </div>
  );
};

const Child = () => {
  return <SubChild />;
};

export default () => {
  let [theme, setTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        toggle: () =>
          setTheme(theme === themes.light ? themes.dark : themes.light),
      }}
    >
      <Child />
    </ThemeContext.Provider>
  );
};
