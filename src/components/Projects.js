import ProjectsItem from './ProjectsItem.js'

const Projects = ({ projectsData }) => {
    return (
        <div className="Projects" id="projects">
            <div className="projectsContainer">
                <div className="headerContainer">
                    <h3>My Projects</h3>
                    <h2>Some Of My Latest Work.</h2>
                </div>
                {projectsData.length > 0 && projectsData.map((data) => (
                    <ProjectsItem
                        key={data.id}
                        projectsData={data}
                    />
                ))}
            </div>

        </div>
    )
}

export default Projects
