
const AboutItem = ({ aboutData }) => {
    return (
        <div className="AboutItem">
            <i className={aboutData.icon}></i> 
            <h3>{aboutData.title}</h3>
            <p>{aboutData.description}</p>
        </div>
    )
}

export default AboutItem
