import React from 'react'
import './Navigation.css'
import { NavLink } from "react-router-dom";
import Pdf from '../../assets/CV.pdf';

const Projects = () => (
    <div>
        <div className="d-flex justify-content-between align-content-center mt-2 mb-3 px-1">
            <NavLink to="/" className="ll-link nav-link not-draggable" activeClassName="active">Me</NavLink>
            <NavLink to={Pdf} target="_blank" className="nav-link ll-link not-draggable" activeClassName="active">CV</NavLink>
            <NavLink to="/projects" className="nav-link ll-link not-draggable" activeClassName="">Projects</NavLink>
            <NavLink to="/technologies" className="nav-link ll-link not-draggable" activeClassName="active">Technologies</NavLink>
        </div>
    </div>
);

export default Projects;