import Header from "../../Components/Header/index";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import "./index.min.css";
import { BsArrowDownSquare } from "react-icons/bs";
import my_data from "../../Assets/myData/my_data.json";
import AOS from "aos";
import "aos/dist/aos.css";

const MySkills = ({ pageTitle }) => {

    const [list_of_visible_skill_details_indexes, set_list_of_visible_skill_details_indexes] = useState([]);

    const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);

    const [isAppearedLoader, setIsAppearedLoader] = useState(true);

    window.addEventListener("resize", (e) => {

        setWindowInnerWidth(window.innerWidth);

    });

    useEffect(() => {

        document.title = pageTitle;

        AOS.init();

        document.querySelector(".my-skills").style.minHeight = `calc(100vh - ${document.querySelector("header").offsetHeight}px)`;

        let loaderTimeout = setTimeout(() => {

            setIsAppearedLoader(false);

            clearTimeout(loaderTimeout);

        }, 2000);

    });

    const open_skill_details_box_func = (index) => {
        let list_of_visible_skill_details_indexes_temp = list_of_visible_skill_details_indexes.map((el) => el);
        if (!list_of_visible_skill_details_indexes_temp.includes(index)) {
            list_of_visible_skill_details_indexes_temp.push(index);
            set_list_of_visible_skill_details_indexes(list_of_visible_skill_details_indexes_temp);
        } else {
            list_of_visible_skill_details_indexes_temp = list_of_visible_skill_details_indexes.filter((el) => el !== index);
            set_list_of_visible_skill_details_indexes(list_of_visible_skill_details_indexes_temp);
        }
    }

    return (
        <Fragment>
            <Header />
            {/* Start My Skills Page */}
            <div className={`my-skills d-flex align-items-center ${isAppearedLoader ? 'loader-state' : 'pb-5 pt-5'}`}>
                {isAppearedLoader && <div className="loader"> Loading ... </div>}
                {/* Start Container */}
                {!isAppearedLoader && <div className="container">
                    <h1 className="page-name text-center mb-5">My Skills</h1>
                    {/* Start Grid System */}
                    <div className="skills-info">
                        {my_data.skills.map((skill_data, index) =>
                            /* Start Column */
                            <div className="skill-box" key={index} data-aos="fade-down">
                                {/* Start Grid System */}
                                <div className="row align-items-center skill-box pt-3 pb-3 bg-secondary">
                                    {/* Start Column */}
                                    <div className={`col-md-1 text-center ${windowInnerWidth < 767 ? "mb-3" : ""}`}>
                                        <span className="skill-num">{index + 1}</span>
                                    </div>
                                    {/* End Column */}
                                    {/* Start Column */}
                                    <div className={`col-md-10 ${windowInnerWidth < 767 ? "mb-3 text-center" : ""}`}>
                                        <h5 className="">{skill_data.skill_name}</h5>
                                        <h6 className="mb-0">{skill_data.experience}</h6>
                                    </div>
                                    {/* End Column */}
                                    {/* Start Column */}
                                    <div className="col-md-1 text-center">
                                        <BsArrowDownSquare className="skill-details-open-arrow"
                                            onClick={() => open_skill_details_box_func(index)}
                                        />
                                    </div>
                                    {/* End Column */}
                                    {/* Start Skill Details Box */}
                                    {list_of_visible_skill_details_indexes.includes(index) && <div className="skill-details-box mt-4 col-md-12">
                                        <table className="w-100 skill-details-table">
                                            <thead>
                                                <tr>
                                                    <th>Tech Number</th>
                                                    <th>Tech Name</th>
                                                    <th>Level</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {my_data.skills[index].skill_tech_details.map((tech_info, tech_index) => (
                                                    <tr key={tech_index}>
                                                        <td className="tech-number">
                                                            <span className="fw-bold">{tech_index + 1}</span>
                                                        </td>
                                                        <td>{tech_info.tech_name}</td>
                                                        <td>{tech_info.level}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>}
                                    {/* End Skill Details Box */}
                                </div>
                                {/* End Grid System */}
                            </div>
                            /* End Column */
                        )}
                    </div>
                    {/* End Grid System */}
                </div>}
                {/* End Container */}
            </div>
            {/* End My Skills Page */}
        </Fragment>
    );
}

export default MySkills;