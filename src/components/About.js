import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4> Version 1.0.0 </h4>
            <h4>Socials: </h4>
            <ul>
                <li><a href="https://instagram.com/imsaifx" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="https://fb.com/imsaifeldin" target="_blank" rel="noreferrer">Facebook</a></li>
            </ul>
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default About
