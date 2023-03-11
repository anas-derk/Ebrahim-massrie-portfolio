import Header from "../../Components/Header/index";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import "./index.min.css";
import { FaFacebookF } from 'react-icons/fa';
import { MdArrowDropUp } from "react-icons/md";
import my_data from "../../Assets/myData/my_data.json";

const MySkills = ({ pageTitle }) => {

    const [list_of_visible_skill_details_indexes, set_list_of_visible_skill_details_indexes] = useState([]);

    useEffect(() => {

        document.title = pageTitle;

        document.querySelector(".my-skills").style.minHeight = `calc(100vh - ${document.querySelector("header").offsetHeight}px)`;

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
            <div className="my-skills pt-5">
                {/* Start Container */}
                <div className="container">
                    <h1 className="page-name text-center mb-5">My Skills</h1>
                    {/* Start Grid System */}
                    <div className="skills-info">
                        {my_data.skills.map((skill_data, index) =>
                            /* Start Column */
                            <div className="skill-box" key={index}>
                                {/* Start Grid System */}
                                <div className="row align-items-center skill-box pt-3 pb-3 bg-secondary">
                                    {/* Start Column */}
                                    <div className="col-md-1 text-center">
                                        <FaFacebookF className="skill-icon" />
                                    </div>
                                    {/* End Column */}
                                    {/* Start Column */}
                                    <div className="col-md-10">
                                        <h5 className="">{skill_data.skill_name}</h5>
                                        <h6 className="mb-0">{skill_data.experince}</h6>
                                    </div>
                                    {/* End Column */}
                                    {/* Start Column */}
                                    <div className="col-md-1 text-center">
                                        <MdArrowDropUp className="skill-details-open-arrow"
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
                </div>
                {/* End Container */}
            </div>
            {/* End My Skills Page */}
        </Fragment>
    );
}

export default MySkills;