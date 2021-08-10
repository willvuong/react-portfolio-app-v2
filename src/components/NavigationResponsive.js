import { useCallback } from 'react'

const NavigationResponsive = ( {setShowMenu} ) => {
    const closeNavigationResponsive = () => {
        document.getElementByClassName("NavigationResponsive").style.display = "none"
    }

    const setShowMenuChange = useCallback(e => {
       setShowMenu(e.target.value)
    },[setShowMenu])

    return (
        <nav className="NavigationResponsive">
            <ul id="navLinksResponsive">
                <li><a href='#about' onClick={closeNavigationResponsive && setShowMenuChange}>About</a></li>
                <li><a href='#projects' onClick={closeNavigationResponsive && setShowMenuChange}>Projects</a></li>
                <li><a href='#contact' onClick={closeNavigationResponsive && setShowMenuChange}>Contact</a></li>
            </ul>
        </nav>
    )
}

export default NavigationResponsive
