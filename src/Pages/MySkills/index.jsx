import Header from "../../Components/Header/index";
import { Fragment } from "react";
import { useEffect } from "react";
import "./index.min.css";
import { FaFacebookF } from 'react-icons/fa';
import { MdArrowDropUp } from "react-icons/md";

const MySkills = ({ pageTitle }) => {

    useEffect(() => {

        document.title = pageTitle;

        document.querySelector(".my-skills").style.minHeight = `calc(100vh - ${document.querySelector("header").offsetHeight}px)`;
        
    });

    return (
        <Fragment>
            <Header />
            {/* Start My Skills Page */}
            <div className="my-skills pt-5">
                {/* Start Container */}
                <div className="container">
                    <h1 className="page-name text-center mb-5">My Skills</h1>
                    {/* Start Grid System */}
                    <div className="row">
                        {/* Start Column */}
                        <div className="col-md-6">
                            {/* Start Grid System */}
                            <div className="row align-items-center skill-box pt-3 pb-3 bg-secondary">
                                {/* Start Column */}
                                <div className="col-md-1">
                                    <FaFacebookF className="skill-icon" />
                                </div>
                                {/* End Column */}
                                {/* Start Column */}
                                <div className="col-md-10 mb-4">
                                    <h5 className="">Front End developer</h5>
                                    <h6 className="mb-0">More Than 4 years</h6>
                                </div>
                                {/* End Column */}
                                {/* Start Column */}
                                <div className="col-md-1">
                                    <MdArrowDropUp className="skill-details-open-arrow" />
                                </div>
                                {/* End Column */}
                                {/* Start Skill Details Box */}
                                <div className="skill-details-box col-md-12">
                                    <table className="w-100">
                                        <thead>
                                            <tr>
                                                <th>Tech Number</th>
                                                <th>Tech Name</th>
                                                <th>Level</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                        </tbody>
                                    </table>
                                </div>
                                {/* End Skill Details Box */}
                            </div>
                            {/* End Grid System */}
                        </div>
                        {/* End Column */}
                    </div>
                    {/* End Grid System */}
                </div>
                {/* End Container */}
            </div>
            {/* End My Skills Page */}
        </Fragment>
    );
}

export default MySkills;