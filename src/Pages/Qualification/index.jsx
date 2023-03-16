import { Fragment, useEffect } from "react";
import Header from "../../Components/Header";
import "./index.min.css";
import my_data from "../../Assets/myData/my_data.json";

const Qualification = ({ pageTitle }) => {

    useEffect(() => {

        document.title = pageTitle;

        document.querySelector(".qualification").style.minHeight = `calc(100vh - ${document.querySelector("header").offsetHeight}px)`;

    }, []);

    return (
        <Fragment>
            <Header />
            {/* Start Qualification Page */}
            <div className="qualification pt-5 pb-5 d-flex align-items-center">
                {/* Start Container */}
                <div className="container">
                    <h1 className="page-name text-center mb-5">Qualification</h1>
                    {/* Start Qualification Details Box */}
                    <div className="qualification-details-box row">
                        {/* Start Column */}
                        <div className="col-md-6">
                            <h4 className="section-title mb-4 pb-2">Education</h4>
                            {/* Start Education Details Box */}
                            <section className="education-details-box details-box bg-secondary">
                                {my_data.qualification.education.map((el, index) => (
                                    /* Start Details Part */
                                    <div className="details-part p-4 ps-5" key={index}>
                                        <h6 className="duration">{el.duration}</h6>
                                        <h5 className="level">{el.level}</h5>
                                        <p className="description">
                                            {el.description}
                                        </p>
                                    </div>
                                    /* End Details Part */
                                ))}
                            </section>
                            {/* End Education Details Box */}
                        </div>
                        {/* End Column */}
                        {/* Start Column */}
                        <div className="col-md-6">
                            <h4 className="section-title mb-4 pb-2">Experience</h4>
                            {/* Start Experience Details Box */}
                            <section className="experience-details-box details-box bg-secondary">
                                {my_data.qualification.experience.map((el, index) => (
                                    /* Start Details Part */
                                    <div className="details-part p-4 ps-5" key={index}>
                                        <h6 className="duration">2013 - 2015</h6>
                                        <h5 className="level">Master In Computer Science</h5>
                                        <p className="description">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab facilis possimus ipsa laudantium assumenda non delectus fugiat corrupti iure magnam. Facilis tenetur voluptate aspernatur expedita a animi delectus, ab qui.
                                        </p>
                                    </div>
                                    /* End Details Part */
                                ))}
                            </section>
                            {/* End Experience Details Box */}
                        </div>
                        {/* End Column */}
                    </div>
                    {/* End Qualification Details Box */}
                </div>
                {/* End Container */}
            </div >
            {/* End Qualification Page */}
        </Fragment >
    );

}

export default Qualification;