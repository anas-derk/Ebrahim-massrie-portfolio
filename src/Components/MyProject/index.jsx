import "./index.min.css";

const MyProject = ({ title, description, technologies, sourceCodeLink }) => {
    return (
        <div className="project-box bg-secondary p-3">
            <div className="name-and-description-box p-3">
                <h5 className="project-title fw-bold">Project Name: {title}</h5>
                <h6 className="project-description-heading mb-3 fw-bold p-2">Description :</h6>
                <p className="project-description m-0">{description}</p>
            </div>
            <h6 className="project-technologies-heading fw-bold mb-3 p-2">Technologies Used :</h6>
            <ul className="technologies-list fw-bold mb-4">
                {technologies.map((technology, index) => (
                    <li className="text-uppercase" key={index}>{technology}</li>
                ))}
            </ul>
            <a href={sourceCodeLink} className="source-code-link btn d-block fw-bold"
                target="_blank">
                Code Link On Github
            </a>
        </div>
    );
}

export default MyProject;