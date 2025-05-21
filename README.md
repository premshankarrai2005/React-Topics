# React-Topics
A collection of important React topics with explanations and code examples for interviews and real-world projects.

# React-Hooks
  1.useEffect hook
  2.useContext hook
    In the use effect three main process:-
    a.Create context with createContext().
     e.g:-const ThemeContext = createContext();
    b.Wrap your app with Context.Provider and pass value
     e.g:-<ThemeContext.Provider value={theme}>
               <Child />
          </ThemeContext.Provider>
    c.Use useContext(ContextName) inside any child component
     e.g:- const theme = useContext(ThemeContext);
           <h1>The current theme is: {theme}</h1>