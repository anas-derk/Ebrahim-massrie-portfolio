import { Fragment, useEffect } from "react";
import Header from "../../Components/Header";
import "./index.min.css";
import MyProject from "../../Components/MyProject/index";
import my_data from "../../Assets/myData/my_data.json";

const MyProjects = ({ pageTitle }) => {

    useEffect(() => {

        document.title = pageTitle;

        document.querySelector(".my-projects").style.minHeight = `calc(100vh - ${document.querySelector("header").offsetHeight}px)`;

    }, []);

    return (
        <Fragment>
            <Header />
            {/* Start My Projects Page */}
            <div className="my-projects pt-5 pb-5">
                {/* Start Container */}
                <div className="container">
                    <h1 className="page-name text-center mb-5">My Projects</h1>
                    {/* Start Grid System */}
                    <div className="row">
                        {my_data.projects.map((project, index) => (
                            <MyProject
                                key={index}
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
                                sourceCodeLink={project.sourceCodeLink}
                            />
                        ))}
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