import Header from "../../Components/Header/index";
import { Fragment } from "react";
import { useEffect } from "react";
import "./index.min.css";

const MySkills = ({ pageTitle }) => {

    useEffect(() => {

        document.title = pageTitle;

        document.querySelector(".my-skills").style.height = `calc(100vh - ${document.querySelector("header").offsetHeight}px)`;
        
    });

    return (
        <Fragment>
            <Header />
            {/* Start My Skills Page */}
            <div className="my-skills pt-5">
                {/* Start Container */}
                <div className="container">
                    <h1 className="page-name text-center">My Skills</h1>
                </div>
                {/* End Container */}
            </div>
            {/* End My Skills Page */}
        </Fragment>
    );
}

export default MySkills;