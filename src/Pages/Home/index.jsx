import { useEffect } from "react";
import "./index.min.css";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
} from 'react-icons/fa';

import { MdDoubleArrow } from "react-icons/md";

const Home = ({ pageTitle }) => {
    useEffect(() => {
        document.title = `Ibrahim Nasri - ${pageTitle}`;
        document.querySelector(".home").style.height = `calc(100vh - ${document.querySelector("header").offsetHeight}px)`;
    }, []);

    let linksIconsComponents = [
        <FaFacebookF />,
        <FaLinkedinIn />,
        <FaGithub />,
        <FaInstagram />,
    ];

    return (
        // Start Home Page
        <div className="home">
            {/* Start Grid System From Bootstrap Framework */}
            <div className="row align-items-center">
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
                        <h1 className="fw-bold my-name">Hi, I'am Ebrahim Massrie</h1>
                        <h5 className="job-position fw-bold">Junior Artificial Intelligence Engineer</h5>
                        <p className="job-caption mb-4">Junior level experince in Artificial Intelligence Engineering, and development knowledge, Producing The Best Apps With Good quality</p>
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
        </div>
        // End Page Not Found
    );
}

export default Home;