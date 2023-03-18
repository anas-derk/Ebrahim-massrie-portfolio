import { useEffect, Fragment } from "react";
import "./index.min.css";
import { MdDoubleArrow } from "react-icons/md";
import { useState } from "react";
import Header from "../../Components/Header/index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import my_data from "../../Assets/myData/my_data.json";
import image4 from "../../Assets/images/photo_6039736428323258927_y.jpg";

const Introduction = ({ pageTitle }) => {

    const linksIconsComponents = useSelector(state => state.linksIconsComponents);

    const [myName, setMyName] = useState("");

    const [myJobPosition, setMyJobPosition] = useState("");

    const [myJobCaption, setMyJobCaption] = useState("");

    const smothlyTextWriting = useSelector(state => state.smothlyTextWriting);

    const contact_links_arr = Object.values(my_data.contact_me_links);

    useEffect(() => {
        document.title = pageTitle;
        document.querySelector(".introduction").style.minHeight = `calc(100vh - ${document.querySelector("header").offsetHeight}px)`;
        smothlyTextWriting("Hi, I'am Ebrahim Massrie |", setMyName);
        smothlyTextWriting(my_data.introduction.jobPosition, setMyJobPosition);
        smothlyTextWriting(my_data.introduction.jobCaption, setMyJobCaption, 25);
    }, []);

    return (
        // Start Home Page
        <Fragment>
            {/* Start Header */}
            < Header />
            {/* End Header */}
            <div className="introduction">
                {/* Start Grid System From Bootstrap Framework */}
                <div className="row align-items-center" >
                    <div className="col-lg-2">
                        <ul className="contact-links animate__fadeInLeft">
                            {linksIconsComponents.map((icon, index) =>
                                <li className="icon" key={index}>
                                    <a href={contact_links_arr[index]} className="icon" target="_blank">{icon}</a>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <div className="summary">
                            <h1 className="fw-bold my-name">{myName}</h1>
                            <h5 className="job-position fw-bold">{myJobPosition}</h5>
                            <p className="job-caption mb-4">{myJobCaption}</p>
                            <Link className="btn p-3 contact-me-btn" to="/contact-me">
                                Constact me &nbsp;
                                <MdDoubleArrow />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg">
                        <img src={image4} alt="Image Exist !!" className="my-image" />
                    </div>
                </div>
                {/* End Grid System From Bootstrap Framework */}
            </div>
        {/* End Home Page */}
        </Fragment>
    );
}

export default Introduction;