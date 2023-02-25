import { FaDownload } from "react-icons/fa";
import Header from "../../Components/Header";
import { Fragment, useEffect } from "react";
import "./index.min.css";
import { useSelector } from "react-redux";
import contact_links from "../../Assets/contact_links.json";

const AboutMe = ({ pageTitle }) => {

    const linksIconsComponents = useSelector(state => state.linksIconsComponents);

    const contact_links_arr = Object.values(contact_links);

    useEffect(() => {

        document.title = pageTitle;

        document.querySelector(".about-me").style.height = `calc(100vh - ${document.querySelector("header").offsetHeight}px)`;

    }, []);

    return (
        <Fragment>
            <Header />
            {/* Start About Me Page */}
            <div className="about-me pt-5">
                {/* Start Container */}
                <div className="container">
                    <h1 className="page-name text-center mb-5">About Me</h1>
                    {/* Start Grid System */}
                    <div className="row">
                        {/* Start Column */}
                        <div className="col-md-6">
                            hh
                        </div>
                        {/* End Column */}
                        {/* Start Column */}
                        <div className="col-md-6">
                            <p className="mb-5">aaaa</p>
                            <div className="row text-center">
                                <div className="col">
                                    <h4 className="mb-3">01+</h4>
                                    <h6 className="mb-3">Years</h6>
                                    <h6>experience</h6>
                                </div>
                                <div className="col">
                                    <h4 className="mb-3">01+</h4>
                                    <h6 className="mb-3">Years</h6>
                                    <h6>experience</h6>
                                </div>
                                <div className="col">
                                    <h4 className="mb-3">01+</h4>
                                    <h6 className="mb-3">Years</h6>
                                    <h6>experience</h6>
                                </div>
                            </div>
                        </div>
                        {/* End Column */}
                        {/* Start Column */}
                        <div className="col-md-6">
                            <ul className="contact-links mt-5 text-center d-flex justify-content-center">
                                {linksIconsComponents.map((icon, index) =>
                                    <li className="icon me-5" key={index}>
                                        <a href={contact_links_arr[index]} className="icon p-2 ps-3 pe-3" target="_blank">{icon}</a>
                                    </li>
                                )}
                            </ul>
                        </div>
                        {/* End Column */}
                        {/* Start Column */}
                        <div className="col-md-6">
                            <button className="btn btn-danger p-3 d-block mt-5 mx-auto form-control">
                                <span className="me-2">Download CV</span>
                                <FaDownload />
                            </button>
                        </div>
                        {/* End Column */}
                    </div>
                    {/* End Grid System */}
                </div>
                {/* End Container */}
            </div>
            {/* End About Me Page */}
        </Fragment>
    );
}

export default AboutMe;