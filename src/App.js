import logo from "./logo.svg";
import "./App.css";
import Exercises from "./components/Exercises/Exercises";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      <Exercises></Exercises>
      <Blogs></Blogs>
    </div>
  );
}

export default App;
