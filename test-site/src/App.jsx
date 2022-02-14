import Navbar from './Components/JSX/Navbar'
import Home from './Components/JSX/Home'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
