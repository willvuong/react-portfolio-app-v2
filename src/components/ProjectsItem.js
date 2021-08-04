
const ProjectsItem = ({ projectsData }) => {
    return (
        <div className="ProjectsItem">

            <div className="projectImgContainer">
                <img src={projectsData.img} ></img>
                <div className="overlay"></div> {/* specifically for dark background on hover */}

                <div className="projectInfo">
                    <p>{projectsData.description}</p>

                    <div className="projectLinks">
                            <a href={projectsData.demoLink} target="_blank">Demo <i class="fas fa-arrow-right"></i></a>
                            <a href={projectsData.sourceCode} target="_blank">Source <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>

            <h3>{projectsData.name}</h3>

        </div>
    )
}

export default ProjectsItem
