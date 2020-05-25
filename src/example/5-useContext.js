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
});

const SubChild = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <button style={{ background: theme.background, color: theme.foreground }}>
        hello world
      </button>
    </div>
  );
};

const Child = () => {
  return <SubChild />;
};

export default () => {
  return (
    <ThemeContext.Provider value={themes.light}>
      <Child />
    </ThemeContext.Provider>
  );
};
