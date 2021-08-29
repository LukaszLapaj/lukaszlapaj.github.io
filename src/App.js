import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import "./App.css";
import Header from './components/Header/Header'
import Navigation from "./components/Navigation/Navigation"
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Technologies from "./components/Technologies/Technologies";

import {HashRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <Router basename="/">
            <div className="ll-container mx-auto">
                <div className="ll-inner px-3">
                    <Header/>
                    <Navigation/>
                    <Switch>
                        <Route exact path="/" component={About}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/technologies" component={Technologies}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;