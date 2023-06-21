import "./App.css";


function App() {
  return (
    <div className="App">
      <h1>Should you use a Dropdown</h1>
      <select name="cars" id="cars">
        <option value="select">select</option>
        <option value="Yes">Yes</option>
        <option value="Not">Probably Not</option>
      </select>
    </div>
  );
}

export default App;
