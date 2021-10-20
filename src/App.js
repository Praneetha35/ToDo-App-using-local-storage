import "./App.css";
import ToDoApp from "./toDo";
import Data from "./table";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return <h2>TO DO APP</h2>;
}
export default function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <Link to="/">Home</Link>

            <br />
            <Link to="/add">Add task</Link>
            <br />
            <Link to="/display">Schedule</Link>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component = {Home}>
         
          </Route>
          <Route exact path="/add" component = {ToDoApp}>
          
          </Route>
          <Route exact path="/display" component = {Data}>
          
           </Route>
        </Switch>
      </div>
    </Router>
  );
}


