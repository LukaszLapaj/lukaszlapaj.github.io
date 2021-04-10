import React from "react";
import LinkedIn from "../../assets/media/linkedin.svg";
import GitHub from "../../assets/media/github.svg";
import Mail from "../../assets/media/mail.svg";
import Facebook from "../../assets/media/facebook.svg";
import Instagram from "../../assets/media/instagram.svg";
import 'bootstrap/dist/css/bootstrap.css';
import "./Header.css";

export const Header = () => (
    <>
        <div>
            <img className="img-fluid mx-auto d-block not-draggable rounded-circle profile-image" loading="eager" width="398" height="398" alt="" src="https://avatars0.githubusercontent.com/u/4143729?s=460&v=5"/>
        </div>
        <div>
            <div className="mt-2 mb-2">
                <h1 className="text-center m-0">Łukasz Łapaj</h1>
            </div>
        </div>
        <div>
            <div className="d-flex justify-content-between align-content-center my-3 px-4">
                <a className="not-draggable" href="https://www.linkedin.com/in/lukaszlapaj/" target="_blank" rel="noreferrer">
                    <img alt="LI" className="ll-social not-draggable" src={LinkedIn}/>
                </a>
                <a className="not-draggable" href="https://github.com/lukaszlapaj" target="_blank" rel="noreferrer">
                    <img alt="GH" className="ll-social not-draggable" src={GitHub}/>
                </a>
                <a className="not-draggable" href="mailto:lukaszlapaj@interia.pl" target="_blank" rel="noreferrer">
                    <img alt="MAIL" className="ll-social not-draggable" src={Mail}/>
                </a>
                <a className="not-draggable" href="https://www.facebook.com/LukaszLapaj" target="_blank" rel="noreferrer">
                    <img alt="FB" className="ll-social not-draggable" src={Facebook}/>
                </a>
                <a className="not-draggable" href="https://www.instagram.com/eloeloou" target="_blank" rel="noreferrer">
                    <img alt="IG" className="ll-social not-draggable" src={Instagram}/>
                </a>
            </div>
        </div>
    </>
);

export default Header;