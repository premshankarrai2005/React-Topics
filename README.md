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
    3.useReducer:-
      useReducer hook is similar to the useState but we are using useState for small project or small state management and useReducer we using for the large project or large state management.It  can easily manage the large scale state.
      
      syntax:-
        const [state, dispatch] = useReducer(reducerFunction, initialState); 
        
         • state: The current state value.

         • dispatch: A function to send actions to the reducer.

         • reducerFunction: A function that receives (state, action) and returns the new state.

         • initialState: The starting value of the state.

         