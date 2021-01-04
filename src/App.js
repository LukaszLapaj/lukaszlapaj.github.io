import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import "./App.css";
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Technologies from "./components/Technologies";

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="container container-fluid ll-container mx-auto">
                <Header/>
                <Route exact path="/" component={About}/>
                <Route exact path="/projects" component={Projects}/>
                <Route exact path="/CV" component={About}/>
                <Route exact path="/technologies" component={Technologies}/>
            </div>
        </Router>
    );
}

export default App;