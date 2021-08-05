import React from 'react'

const Home = () => {
    return (
        <div className="Home">
            <title>William Vuong</title>

            <div className="bioContainer">
                <div className="innerBioContainer">
                    <div className="bio">
                        <h2>HELLO, I'M WILLIAM.</h2>
                        <p>Web Programmer based in the Greater Toronto Area.</p>
                    </div>
                    <img id="webDevImg" src="webdev.png" alt="webdev" />
                </div>
            </div>

            <div className="aboutMeContainer">
                <div className="headerContainer">
                    <h3>About Me</h3>
                    <h2>Who I Am.</h2>
                </div>
                <div className="innerAboutMeContainer">
                    <img id="portfolioImg" src="portfolioImg.jpg" alt="picOfMe" />
                    <div className="aboutMe">
                        <p>
                            I am a Computer Programming graduate from Seneca College.
                            Throughout my program, I have demonstrated my ability to code in many
                            programming languages, such as: JavaScript, Java, C, and C++. I also
                            understand database technologies and have the ability to create simple
                            and complex SQL queries. And lastly, I understand the practices in order
                            to meaningfully gather business and system requirement needs.
                            <br />
                            <br />
                            I especially have an interest in Front-End Web Development and enjoy
                            designing simple but yet meaningful websites. I have a good understanding of
                            the React framework and enjoy developing with its useful and easy to use tools.
                        </p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Home
