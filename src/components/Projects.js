import ProjectsItem from './ProjectsItem.js'

const Projects = ({ projectsData }) => {
    return (
        <div className="Projects">
            <title>Projects | William Vuong</title>
            <h2>My Work</h2>
            {projectsData.length > 0 && projectsData.map((data) => (
                <ProjectsItem
                key={data.id}
                projectsData={data}
                />
            ))}
        </div>
    )
}

export default Projects
