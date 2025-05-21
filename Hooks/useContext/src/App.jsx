
import Create from "./components/createContext";
import Parent from "./components/Parent";

function App() {
  const user = { name: "Vivekanand", Age: 20 };

  return (
    <Create.Provider value={user}>
      <h1>This is the App Component (Parent Comp of Parent Comp) </h1>
      <Parent />
    </Create.Provider>
  );
} 
export default App;
