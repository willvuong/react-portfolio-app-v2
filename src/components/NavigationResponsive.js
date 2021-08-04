import { Link } from 'react-router-dom'

import { useCallback } from 'react'

const NavigationResponsive = ( {setShowMenu} ) => {
    const closeNavigationResponsive = () => {
        document.getElementById("navLinksResponsive").style.display = "none"
    }

    const setShowMenuChange = useCallback(e => {
        setShowMenu(e.target.value)
    },[setShowMenu])

    return (
        <nav className="NavigationResponsive">
            <ul id="navLinksResponsive">
                <li><Link to='/about' onClick={closeNavigationResponsive && setShowMenuChange}>About</Link></li>
                <li><Link to='/projects' onClick={closeNavigationResponsive && setShowMenuChange}>Projects</Link></li>
            </ul>
        </nav>
    )
}

export default NavigationResponsive
