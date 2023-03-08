import { Fragment, useEffect } from "react";
import Header from "../../Components/Header";
import "./index.min.css";

const MyProjects = ({ pageTitle }) => {

    useEffect(() => {

        document.title = pageTitle;

        document.querySelector(".my-projects").style.minHeight = `calc(100vh - ${document.querySelector("header").offsetHeight}px)`;

    }, []);

    return (
        <Fragment>
            <Header />
            {/* Start My Projects Page */}
            <div className="my-projects pt-5">
                {/* Start Container */}
                <div className="container">
                    <h1 className="page-name text-center">My Projects</h1>
                    {/* Start Grid System */}
                    <div className="row">
                        {/* Start Column */}
                        <div className="col-md-6">
                            hh
                        </div>
                        {/* End Column */}
                    </div>
                    {/* End Grid System */}
                </div>
                {/* End Container */}
            </div>
            {/* End My Projects Page */}
        </Fragment>
    );

}

export default MyProjects;