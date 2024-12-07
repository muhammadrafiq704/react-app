const { createContext, useContext} = require("react");

// create context for theme
const ThemeContext = createContext({
  themeMode: "light",
  lightTheme: () => {},
  darkTheme: () => {},
});
// custome hook
export default function useTheme () {
  return useContext(ThemeContext);
};

// ye b kr skty hain aur jis jaga provider import krty hain wahn pa value dy skty hain jo createContext ma hai
export const ThemeProvider = ThemeContext.Provider;

// const ThemeContextProvider = ({ children }) => {
//   const [themeMode, setThemeMode] = useState("dark");


  //   return (
  //     <ThemeContext.Provider
  //       value={{ themeMode, setThemeMode, lightTheme, darkTheme }}
  //     >
  //       {children}
  //     </ThemeContext.Provider>
  //   );
// };
// export default ThemeContextProvider;
