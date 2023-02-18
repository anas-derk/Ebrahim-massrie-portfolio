import { useEffect } from "react";
import { Fragment } from "react";
import Header from "../../Components/Header";
import "./index.min.css";
import { MdDoubleArrow } from "react-icons/md";
import { useSelector } from "react-redux";

const ContactMe = ({ pageTitle }) => {

    const linksIconsComponents = useSelector(state => state.linksIconsComponents);

    useEffect(() => {

        document.title = pageTitle;

        document.querySelector(".contact-me").style.minHeight = `calc(100vh - ${document.querySelector("header").offsetHeight}px)`;

    }, []);

    return (
        <Fragment>
            <Header />
            {/* Start Contact Me Page */}
            <div className="contact-me pt-5 pb-5">
                {/* Start Container */}
                <div className="container">
                    <h1 className="page-name text-center mb-5">Contact Me</h1>
                    {/* Start Grid System */}
                    <div className="row">
                        {/* Start Column */}
                        <div className="col-md-4">
                            <ul className="contact-links-list">
                                {linksIconsComponents.map((icon, index) =>
                                    <li className="contact-link" key={index}>
                                        {icon}
                                    </li>  
                                )}
                            </ul>
                        </div>
                        {/* End Column */}
                        {/* Start Column */}
                        <div className="col-md-8">
                            {/* Start Contact Me Form */}
                            <form className="contact-me-form">
                                {/* Start Grid System */}
                                <div className="row mb-4">
                                    <div className="col-md">
                                        <input type="text" placeholder="Name" className="form-control p-4" />
                                    </div>
                                    <div className="col-md">
                                        <input type="email" placeholder="Email" className="form-control p-4" />
                                    </div>
                                </div>
                                <input type="text" placeholder="Project" className="form-control mb-4 p-4" />
                                <textarea placeholder="Message" className="form-control mb-4 p-4" />
                                <button type="submit" className="btn send-message-btn p-3">
                                    Send Message &nbsp;
                                    <MdDoubleArrow />
                                </button>
                                {/* End Grid System */}
                            </form>
                            {/* End Contact Me Form */}
                        </div>
                        {/* End Column */}
                    </div>
                    {/* End Grid System */}
                </div>
                {/* Start Container */}
            </div>
            {/* End Contact Me Page */}
        </Fragment>
    );
}

export default ContactMe;