import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "../App.css";

export const About = () => (
    <>
        <section className={"ll-about"}>
            <div className={"ll-row container-fluid justify-content-center align-content-center m-0 px-4"}>
                <span className={"ll-about-text"}>
                    <p className={"ll-about-text"}>Hi Friend.</p>
                    <p>My name is Łukasz. I am a Computer Science Engineer and student of the Information
                    Technology and Econometrics.</p>
                    <p>Currently taking part in the internship organized at ABB ISDC in a role of Software Quality Engineer.
                    Focusing on the test automation of cognitive services WebAPIs, creating test cases and test scenarios, performance testing, and related tasks.</p>
                    <p>Personally interested in Software Development and Testing, but not closed for other directions.</p>
                    <p>Constantly looking for new challenges and opportunities.</p>
                    <p>Health, Sport and Fragrances freak.</p>
                </span>
            </div>
        </section>
    </>
);

export default About;