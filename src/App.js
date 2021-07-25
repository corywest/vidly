import logo from "./logo.svg";
import "./App.css";
import Movies from "./components/movies";

function App() {
  return (
    <main className="main">
      <h1>Vidly</h1>
      {<Movies />}
    </main>
  );
}

export default App;
