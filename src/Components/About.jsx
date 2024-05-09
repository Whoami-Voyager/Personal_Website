import { Link } from "react-router-dom"
import ProjectCard from "./ProjectCard"

function About() {
    return (
        <>
            <div className="flex flex-row">
                <h1 className="m-12 text-center text-4xl w-1/5">Jonathan McIntosh</h1>
                <div className="flex flex-col w-full m-6">
                    <div className="block m-0.5 bg-apple h-5 w-full"></div>
                    <div className="block m-0.5 bg-ripeMango h-5 w-full"></div>
                    <div className="block m-0.5 bg-princetonOrange h-5 w-full"></div>
                    <div className="block m-0.5 bg-jasper h-5 w-full"></div>
                    <div className="block m-0.5 bg-plum h-5 w-full"></div>
                    <div className="block m-0.5 bg-richElectricBlue h-5 w-full"></div>
                </div>
            </div>
            <nav className="">
                <Link className="" to="/coding">Coding Projects</Link>
                <Link className="" to="/photography">Photography</Link>
            </nav>
            <div>
                <p className="">Hey! I'm Jonathan and this is me just starting my development of my personal website. Here are some projects I have made:</p>
                <ProjectCard />
            </div>
            <div>
                <Link to="/easter-egg">🐇🐥🥚</Link>
            </div>
        </>
    )
}

export default About