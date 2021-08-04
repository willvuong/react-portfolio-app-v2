import React from 'react'

const Contact = ({ contactData }) => {
    return (
        <>
            <li>
                <a href={contactData.link} target="_blank">
                    <div className="contactIcons">
                        <i className={contactData.icon}></i>
                    </div>
                </a>
            </li>
        </>
    )
}

export default Contact
