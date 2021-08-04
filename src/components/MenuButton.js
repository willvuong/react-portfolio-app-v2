import React from 'react'

const MenuButton = ({ icon, onClick }) => {
    return (
        <div className="MenuButton" onClick={onClick}>  
                {icon}    
        </div>
    )
}

export default MenuButton
