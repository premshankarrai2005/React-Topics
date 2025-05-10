## React Lazy and Suspense:-

   # Lazy:-
   React.lazy() is used to load components only when they are needed. This is called lazy loading or code splitting — it improves performance by not loading everything at once.
   
   Syntax:-
         const MyComponent = React.lazy(() => import('./MyComponent'));
         
   # Suspense:-
   "Suspense is the tag which is used to wrap the component that is being lazily loaded, allowing you to display a fallback UI (like a loading spinner or message) while the component is being fetched."
   
    Syntax:-
           <Suspense fallback={<p>Loading About Page...</p>}>
              <About />
           </Suspense>
   
   e.g:-
       import React, { Suspense, lazy } from 'react';

       const About = lazy(() => import('./About'));

       function App() {
       return (
        <div>
           <Suspense fallback={<p>Loading About Page...</p>}>
             <About />
           </Suspense>
        </div>
             );
        }
        
   # Conclusion:-
        The react Lazy and Suspence are used to improve the performance of the app.It help load that component when that component is required without required it does not load that component because of that the load on our server is low . that's why the performance is increase.
        
