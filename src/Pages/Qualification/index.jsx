import { Fragment, useEffect, useState } from "react";
import Header from "../../Components/Header";
import "./index.min.css";
import my_data from "../../Assets/myData/my_data.json";
import AOS from "aos";
import "aos/dist/aos.css";

const Qualification = ({ pageTitle }) => {

    const [isAppearedLoader, setIsAppearedLoader] = useState(true);

    const handleDetailsBoxHeight = () => {

        let educationDetailsBox = document.querySelector(".qualification .education-details-box");

        let experienceDetailsBox = document.querySelector(".qualification .experience-details-box");

        if (educationDetailsBox.offsetHeight > experienceDetailsBox.offsetHeight) {

            experienceDetailsBox.style.height = `${educationDetailsBox.offsetHeight}px`;

        } else {

            educationDetailsBox.style.height = `${experienceDetailsBox.offsetHeight}px`;

        }

    }

    window.addEventListener("resize", (e) => {

        let educationDetailsBox = document.querySelector(".qualification .education-details-box");

        let experienceDetailsBox = document.querySelector(".qualification .experience-details-box");

        if (window.innerWidth < 767) {

            educationDetailsBox.style.height = "auto";

            experienceDetailsBox.style.height = "auto";

        } else {

            handleDetailsBoxHeight();

        }
    });

    useEffect(() => {

        document.title = pageTitle;

        AOS.init();

        document.querySelector(".qualification").style.minHeight = `calc(100vh - ${document.querySelector("header").offsetHeight}px)`;

        let loaderTimeout = setTimeout(() => {

            setIsAppearedLoader(false);

            if (window.innerWidth > 767) {

                handleDetailsBoxHeight();
    
            }

            clearTimeout(loaderTimeout);

        }, 2000);

    }, []);

    return (
        <Fragment>
            <Header />
            {/* Start Qualification Page */}
            <div className={`qualification d-flex align-items-center ${isAppearedLoader ? 'loader-state' : 'pb-5 pt-5'}`}>
                {isAppearedLoader && <div className="loader"> Loading ... </div>}
                {/* Start Container */}
                {!isAppearedLoader && <div className="container">
                    <h1 className="page-name text-center mb-5">Qualification</h1>
                    {/* Start Qualification Details Box */}
                    <div className="qualification-details-box row">
                        {/* Start Column */}
                        <div className="col-md-6" data-aos="fade-right">
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
                        <div className="col-md-6" data-aos="fade-left">
                            <h4 className="section-title mb-4 pb-2">Experience</h4>
                            {/* Start Experience Details Box */}
                            <section className="experience-details-box details-box bg-secondary">
                                {my_data.qualification.experience.map((el, index) => (
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
                            {/* End Experience Details Box */}
                        </div>
                        {/* End Column */}
                    </div>
                    {/* End Qualification Details Box */}
                </div>}
                {/* End Container */}
            </div>
            {/* End Qualification Page */}
        </Fragment >
    );

}

export default Qualification;