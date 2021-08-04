import AboutItem from './AboutItem.js'

const About = ({ aboutData }) => {
    return (
        <div className="About">
            <div className="aboutContainer">
                <div className="headerContainer">
                <h3>My Skillset</h3>
                <h2>What I Can Offer.</h2>
                </div>
                {aboutData.length > 0 && aboutData.map((data) => (
                    <AboutItem
                        key={data.id}
                        aboutData={data}
                    />
                ))}
                <div className="resume">
                    <a href="WilliamVuong_Resume.pdf" download><i className="far fa-file"></i> Resume</a>
                </div>
            </div>

        </div>
    )
}

export default About
