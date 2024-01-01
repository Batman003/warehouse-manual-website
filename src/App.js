import { Routes, Route } from "react-router-dom"
import './App.css';
import { Home } from "./Home";
import { TakeTest } from "./component/TakeTest";
import DetailPage from "./component/DetailPage";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/details/:id" element={ <DetailPage /> } />
      <Route path="/take-test" element={ <TakeTest /> } />
    </Routes>
  </div>
  );
}

export default App;
