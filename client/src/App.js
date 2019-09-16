import React  from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar';
import Body from "./components/Body";
import Footer from "./components/Footer";
import SearchBooks from "./components/SearchBooks";
import SavedBooks from "./components/SavedBooks"


function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />
        <Body />
        <Switch>
        <Route exact path ="/" component={SearchBooks} />
        <Route exact path ="/search" component={SearchBooks} />
        <Route exact path ="/save" component={SavedBooks} />
        {/* <Route exact path ="/books" */}
        {/* <Route component={NoMatch} /> */}
        {/* `*` (get) - Will load your single HTML page in `client/build/index.html`. Make sure you have this _after_ all other routes are defined. */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
