import Contact from './Contact.js'

const Footer = ({ contactData }) => {
    return (
        <div className="Footer" id="contact">
            {/* <h4>Contact Me</h4> */}
            <ul id="contactLinks">
            {contactData.length > 0 && contactData.map((data) => (
                <Contact
                    key={data.id}
                    contactData={data}
                />
            ))}
            </ul>
            <p id="copyright">Copyright © 2021 William Vuong</p>
        </div>
    )
}

export default Footer
