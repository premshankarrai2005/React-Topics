# React-Topics
A collection of important React topics with explanations and code examples for interviews and real-world projects.

### For more detail or for the code you can refer that specific folder .

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
  4.useRef:-
      The useRef hook used in react for mainly two purpose :-
       a.Access DOM elements directly:-
         we can directly access the element by using ref key in that element .if we want to change the background color to any other change in the specific element by clicking any button then we use useref hook for that . 
                               it helps to select that element which we are want to change by using ref key.
          
          syntax:-
            const inputRef = useRef();
            <input ref={inputRef} type="text" placeholder="Enter something" />
          # Note:-if we want access that element the we use inputRef.current(without current word we cannot access.)
          
        b.Store mutable values that persist across renders without causing re-renders:-
         Means if we change any element it it does not update or re-render that element until we want .it does not update on the UI without our permission .but useEffect re-render the element if we change that element .
         
         