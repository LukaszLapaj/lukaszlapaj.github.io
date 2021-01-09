import React from 'react'
import './Navigation.css'
import { NavLink } from "react-router-dom";
import Pdf from '../../assets/CV.pdf';

export const Projects = () => (
    <div>
        <div className="d-flex justify-content-between align-content-center mt-2 mb-3 px-1">
            <NavLink exact to="/" className="ll-link nav-link" activeClassName="active">Me</NavLink>
            <NavLink exact to={Pdf} target="_blank" className="nav-link ll-link" activeClassName="active">CV</NavLink>
            <NavLink exact to="/projects" className="nav-link ll-link" activeClassName="">Projects</NavLink>
            <NavLink exact to="/technologies" className="nav-link ll-link" activeClassName="active">Technologies</NavLink>
        </div>
    </div>
);

export default Projects;