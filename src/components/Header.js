import { useState } from 'react'

import Navigation from './Navigation.js'
import MenuButton from './MenuButton.js'
import NavigationResponsive from './NavigationResponsive.js'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false) //for hamburger menu (click hambuger to open, X to close)
    //console.log({ showMenu })

    return (
        <header className='Header'>
            <div className="navbar">
                <a href="/">
                    <img src="myLogo.png" className="myLogo" alt="logo" />
                </a>
                <Navigation />
                <MenuButton
                    icon={showMenu ? <i class="fas fa-times fa-2x"></i> : <i class="fas fa-bars fa-2x"></i>} //X menu of true, hamburger if false
                    onClick={() => setShowMenu(!showMenu)} //toggle between true and false for onClick result
                />
            </div>

            {showMenu && <NavigationResponsive setShowMenu={setShowMenu}/>}

        </header>
    )
}

export default Header
