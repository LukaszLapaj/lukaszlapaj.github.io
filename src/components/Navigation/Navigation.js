import React from 'react'
import './Navigation.css'
import { NavLink } from "react-router-dom";
import Pdf from '../../assets/CV.pdf';

const Projects = () => (
    <div>
        <div className="d-flex justify-content-between align-content-center mt-2 mb-3 px-1">
            <NavLink exact to="/" className="ll-link nav-link not-draggable">Me</NavLink>
            <a href={Pdf} className="nav-link ll-link not-draggable" target="_blank" rel="noreferrer">CV</a>
            <NavLink to="/projects" className="nav-link ll-link not-draggable">Projects</NavLink>
            <NavLink to="/technologies" className="nav-link ll-link not-draggable">Technologies</NavLink>
        </div>
    </div>
);

export default Projects;