# UseEffect Hooks in React :-
 //🔍 Understanding useEffect in React with All Three Conditions:-
 
    "useEffect is like telling your component: 'After you’ve updated what’s on the screen, go do this extra task (like fetching data or starting a timer). It’s similar to componentDidMount, componentDidUpdate, and componentWillUnmount in class components."
    
    syntax:-
    useEffect(() => {
      // Your side-effect logic here

     return () => {
      // Cleanup logic (optional)
     };
    }, [dependencies]);
    
    
🔁 The Three Conditions of useEffect:-
    1️⃣ No Dependency Array:-
    
       e.g:-
        useEffect(() => {
          console.log("I run after every render");
        });


        ✅ Behavior:
           🔸This effect runs after every render, including the first render.

           🔸This is equivalent to componentDidUpdate.

        ⚠️ Use case:
           🔸When you need to perform a side effect after every state or prop change, such as logging, DOM measurements,etc.
            
            e.g:-
            import React, { useState, useEffect } from "react";

            function Example1() {
              const [count, setCount] = useState(0);
            
              useEffect(() => {
                console.log("Component rendered or updated");
              });
            
              return (
                <div>
                  <p>{count}</p>
                  <button onClick={() => setCount(count + 1)}>Increase</button>
                </div>
              );
            }
    
    2️⃣ Empty Dependency Array ([]):-
    
        e.g:-
        useEffect(() => {
          console.log("I run only once, after the first render");
        }, []);

        
        ✅ Behavior:
            🔸This effect runs only once, after the initial render.

            🔸Equivalent to componentDidMount in class components.

        ⚠️ Use case:
            🔸Perfect for API calls, event listeners, or any initialization logic that should run once.            
            
            
            e.g:-
            import React, { useEffect } from "react";

            function Example2() {
              useEffect(() => {
                console.log("Component mounted");
            
                return () => {
                  console.log("Component will unmount");
                };
              }, []);
            
              return <h1>Hello World</h1>;
            }
    
    3️⃣ With Specific Dependencies:-
        
        e.g:-
        useEffect(() => {
           console.log("Runs only when specific values change");
         }, [someValue]);
         
        ✅ Behavior:
            🔸This effect runs only when the specified dependency (or dependencies) change.

            🔸React checks if the value has changed between renders.

        ⚠️ Use case:
            🔸Ideal when you want to run a side effect only in response to changes in a specific state or prop.
            
            e.g:-
            import React, { useState, useEffect } from "react";

            function Example3() {
              const [name, setName] = useState("");
              const [age, setAge] = useState(20);
            
              useEffect(() => {
                console.log("Name changed to:", name);
              }, [name]);
            
              return (
                <div>
                  <input
                    type="text"
                    placeholder="Enter name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <button onClick={() => setAge(age + 1)}>Increase Age</button>
                </div>
              );
            }
       
       🔸In the above example, the useEffect runs only when name changes, not when age is updated.