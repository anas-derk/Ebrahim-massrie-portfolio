import { FaDownload } from "react-icons/fa";
import Header from "../../Components/Header";
import { Fragment, useEffect, useState } from "react";
import "./index.min.css";
import { useSelector } from "react-redux";
import my_data from "../../Assets/myData/my_data.json";
import image4 from "../../Assets/images/photo_6039736428323258924_x.jpg";

const AboutMe = ({ pageTitle }) => {

    const linksIconsComponents = useSelector(state => state.linksIconsComponents);

    const contact_links_arr = Object.values(my_data.contact_me_links);

    const [isAppearedLoader, setIsAppearedLoader] = useState(true);

    useEffect(() => {

        document.title = pageTitle;

        document.querySelector(".about-me").style.minHeight = `calc(100vh - ${document.querySelector("header").offsetHeight}px)`;

        let loaderTimeout = setTimeout(() => {

            setIsAppearedLoader(false);

            clearTimeout(loaderTimeout);

        }, 2000);

    }, []);

    return (
        <Fragment>
            <Header />
            {/* Start About Me Page */}
            <div className={`about-me d-flex align-items-center ${isAppearedLoader ? 'loader-state' : 'pb-5 pt-5'}`}>
                {isAppearedLoader && <div className="loader"> Loading ... </div>}
                {/* Start Container */}
                {!isAppearedLoader && <div className="container">
                    <h1 className="page-name text-center mb-5">About Me</h1>
                    {/* Start Grid System */}
                    <div className="row align-items-center">
                        {/* Start Column */}
                        <div className="col-lg-6 text-center mb-5">
                            <img src={image4} alt="Image Exist !!" className="my-image" />
                        </div>
                        {/* End Column */}
                        {/* Start Column */}
                        <div className="col-lg-6">
                            <p className="mb-5 summary-description">{my_data.about_me.summary_description}</p>
                            <div className="row text-center">
                                <div className="col">
                                    <h4 className="mb-3 experience-years">{my_data.about_me.experience_years}</h4>
                                    <h6 className="mb-3">Years</h6>
                                    <h6>experience</h6>
                                </div>
                                <div className="col">
                                    <h4 className="mb-3 projects-count">{my_data.about_me.projects_count}</h4>
                                    <h6 className="mb-3">completed</h6>
                                    <h6>projects</h6>
                                </div>
                                <div className="col">
                                    <h4 className="mb-3 freelancer-projects-count">{my_data.about_me.freelancer_projects_count}</h4>
                                    <h6 className="mb-3">freelancer</h6>
                                    <h6>worked</h6>
                                </div>
                            </div>
                        </div>
                        {/* End Column */}
                        {/* Start Column */}
                        <div className="col-lg-6">
                            <ul className="contact-links mt-5 text-center d-flex justify-content-center">
                                {linksIconsComponents.map((icon, index) =>
                                    <li className="icon" key={index}>
                                        <a href={contact_links_arr[index]} className="icon" target="_blank">{icon}</a>
                                    </li>
                                )}
                            </ul>
                        </div>
                        {/* End Column */}
                        {/* Start Column */}
                        <div className="col-lg-6">
                            <a
                                className="btn btn-danger p-3 d-block mt-5 mx-auto form-control"
                                href="https://seirah.com/sbc6fe20246?lang=en"
                                target="_blank"
                            >
                                <span className="me-2">Show CV</span>
                                <FaDownload />
                            </a>
                        </div>
                        {/* End Column */}
                    </div>
                    {/* End Grid System */}
                </div>}
                {/* End Container */}
            </div>
            {/* End About Me Page */}
        </Fragment>
    );
}

export default AboutMe;