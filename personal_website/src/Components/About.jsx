import { Link } from "react-router-dom"
import ProjectCard from "./ProjectCard"

function About() {
    return (
        <>
            <h1>Jonathan McIntosh</h1>
            <nav>
                <Link to="/photography">Photography</Link>
                <Link to="/coding">Coding Projects</Link>
            </nav>
            <div>
                <p>Hey! I'm Jonathan and this is me just starting my development of my personal website. Here are some projects I have made:</p>
                <ProjectCard />
            </div>
        </>
    )
}

export default About