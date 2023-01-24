import { useEffect, Fragment } from "react";
import "./index.min.css";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
} from 'react-icons/fa';

import { MdDoubleArrow } from "react-icons/md";
import { useState } from "react";
import Header from "../../Components/Header/index";

const Home = ({ pageTitle }) => {

    const [myName, setMyName] = useState("");

    const [myJobPosition, setMyJobPosition] = useState("");

    const [myJobCaption, setMyJobCaption] = useState("");

    const smothlyTextWriting = (text, setterFunc, duration = 50) => {
        let charIndex = 0;
        let textInternval = setInterval(() => {
            if (charIndex < text.length) {
                setterFunc(text.slice(0, charIndex + 1));
                charIndex++;
            } else {
                let textTimeout = setTimeout(() => {
                    charIndex = 0;
                    clearTimeout(textTimeout);
                }, 2000);
                clearInterval(textInternval);
            };
        }, duration);
    }

    useEffect(() => {
        document.title = pageTitle;
        document.querySelector(".home").style.height = `calc(100vh - ${document.querySelector("header").offsetHeight}px)`;
        smothlyTextWriting("Hi, I'am Ebrahim Massrie |", setMyName);
        smothlyTextWriting("Junior Artificial Intelligence Engineer", setMyJobPosition);
        smothlyTextWriting("Junior level experince in Artificial Intelligence Engineering, and development knowledge, Producing The Best Apps With Good quality", setMyJobCaption, 25);
    }, []);

    let linksIconsComponents = [
        <FaFacebookF />,
        <FaLinkedinIn />,
        <FaGithub />,
        <FaInstagram />,
    ];

    return (
        // Start Home Page
        <Fragment>
            {/* Start Header */}
            < Header />
            {/* End Header */}
            <div className="home">
                {/* Start Grid System From Bootstrap Framework */}
                <div className="row align-items-center" >
                    <div className="col-md-2">
                        <ul className="contact-links">
                            {linksIconsComponents.map((icon, index) =>
                                <li className="icon" key={index}>
                                    <a href="#" className="icon">{icon}</a>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <div className="summary">
                            <h1 className="fw-bold my-name">{myName}</h1>
                            <h5 className="job-position fw-bold">{myJobPosition}</h5>
                            <p className="job-caption mb-4">{myJobCaption}</p>
                            <button className="btn p-3 contact-me-btn">
                                Constact me &nbsp;
                                <MdDoubleArrow />
                            </button>
                        </div>
                    </div>
                    <div className="col-md">
                        mm
                    </div>
                </div>
                {/* End Grid System From Bootstrap Framework */}
            </div >
        {/* End Home Page */}
        </Fragment>
    );
}

export default Home;