import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import "./App.css";
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Technologies from "./components/Technologies/Technologies";

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className='ll-container mx-auto mt-2 mb-6'>
                <div className="ll-inner px-3">
                <Header/>
                <Route exact path="/" component={About}/>
                <Route exact path="/projects" component={Projects}/>
                <Route exact path="/CV" component={About}/>
                <Route exact path="/technologies" component={Technologies}/>
                </div>
            </div>
        </Router>
    );
}

export default App;