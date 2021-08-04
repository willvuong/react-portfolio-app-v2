import { useState, useEffect } from 'react'

const Navigation = () => {
    const [activeTab, setActiveTab] = useState('')
    
    //using this useEffect to make sure that the active tab is still highlighted when refreshing the page
    const currentLocation = window.location.href;
    useEffect(() => {
        if (currentLocation.endsWith('/about')) {
            setActiveTab('About')
        } else if (currentLocation.endsWith('/projects')) {
            setActiveTab('Projects')
        }
    }, [activeTab])

    return (
        <nav className="Navigation">
            <ul id="navLinks">
                {/* <li className={activeTab === 'About' ? "navActive" : ""}><Link to='/about' onClick={() => setActiveTab('About')}>About</Link></li>
                <li className={activeTab === 'Projects' ? "navActive" : ""}><Link to='/projects' onClick={() => setActiveTab('Projects')}>Projects</Link></li> */}

                <li className={activeTab === 'About' ? "navActive" : ""}>
                    <a href="#about">About</a>
                </li>
                <li className={activeTab === 'Projects' ? "navActive" : ""}>
                    <a href="#projects">Projects</a>
                </li>
            </ul>
            {/* {activeTab} */}
        </nav>
    )
}

export default Navigation
