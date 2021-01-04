import React from "react";
import LinkedIn from "../assets/media/linkedin.svg";
import GitHub from "../assets/media/github.svg";
import Mail from "../assets/media/mail.svg";
import Facebook from "../assets/media/facebook.svg";
import Instagram from "../assets/media/instagram.svg";
import {NavLink} from "react-router-dom";
import Pdf from '../assets/CV.pdf';
import 'bootstrap/dist/css/bootstrap.css';
import "../App.css";

export const Header = () => (
    <>
        <section className="ll-profile p-0 m-0">
            <div className="row justify-content-center align-content-center m-0">
                <img alt="" className="ll-profile-picture" src="https://avatars0.githubusercontent.com/u/4143729?s=460&v=5"/>
            </div>
            <div className="row justify-content-center align-content-center m-0">
                <h1 className="ll-profile-text justify-content-center align-content-center">Łukasz Łapaj</h1>
            </div>
        </section>
        <section className="ll-header p-0 m-0">
            <div className="ll-row justify-content-center align-content-center">
                <div className="d-flex justify-content-center align-content-center">
                    <a href="https://www.linkedin.com/in/lukaszlapaj/"><img alt="LI" className="ll-social" src={LinkedIn}/></a>
                    <a href="https://github.com/lukaszlapaj"><img alt="GH" className="ll-social" src={GitHub}/></a>
                    <a href="mailto:lukaszlapaj@interia.pl"><img alt="MAIL" className="ll-social" src={Mail}/></a>
                    <a href="https://www.facebook.com/LukaszLapaj"><img alt="FB" className="ll-social" src={Facebook}/></a>
                    <a href="https://www.instagram.com/eloeloou"><img alt="IG" className="ll-social" src={Instagram}/></a>
                </div>
            </div>
        </section>
        <section className="ll-header px-3 m-0">
            <div className="ll-row justify-content-between align-content-center">
                <div className="d-flex justify-content-between align-content-center">
                    <NavLink exact to="/" className="ll-link nav-link" activeClassName="">Me</NavLink>
                    <NavLink exact to={Pdf} target="_blank" className="ll-link nav-link" activeClassName="active">CV</NavLink>
                    <NavLink exact to="/projects" className="ll-link nav-link" activeClassName="">Projects</NavLink>
                    <NavLink exact to="/technologies" className="ll-link nav-link" activeClassName="active">Technologies</NavLink>
                </div>
            </div>
        </section>
    </>
);

export default Header;