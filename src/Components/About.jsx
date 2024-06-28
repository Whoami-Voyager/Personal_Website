import { Link } from "react-router-dom"
import ProjectCard from "./ProjectCard"

function About() {
    return (
        <div className="h-full w-full bg-appleBeige">
            <div className="flex flex-row font-ThinkDifferent">
                <h1 className="m-12 select-none text-center text-4xl lg:text-5xl w-1/5">Jonathan McIntosh</h1>
                <div className="flex flex-col skew-x-12 w-full m-6">
                    <div className="block m-0.5 bg-apple h-5 w-full"></div>
                    <div className="block m-0.5 bg-ripeMango h-5 w-full"></div>
                    <div className="block m-0.5 bg-princetonOrange h-5 w-full"></div>
                    <div className="block m-0.5 bg-jasper h-5 w-full"></div>
                    <div className="block m-0.5 bg-plum h-5 w-full"></div>
                    <div className="block m-0.5 bg-richElectricBlue h-5 w-full"></div>
                </div>
            </div>
            <nav className="font-ThinkDifferent m-8 flex flex-col sm:flex-row sm:justify-around">
                <Link className="text-lg p-2 w-36 hover:text-appleAccent hover:underline hover:scale-105 border-4 border-black rounded-md text-center" to="/coding">Coding Projects</Link>
                <Link className="text-lg p-2 w-36 hover:text-appleAccent hover:underline hover:scale-105 border-4 border-black rounded-md text-center" to="/photography">Photography</Link>
            </nav>
            <div className="font-ThinkDifferent">
                <p className="m-8 text-xl lg:text-center lg:text-3xl">Hey! I'm Jonathan and this is me just starting my development of my personal website. Here are some projects I have made:</p>
                <ProjectCard />
            </div>
            <div className="flex justify-end text-sm">
                <Link to="/easter-egg">🐇🐥🥚</Link>
            </div>
        </div>
    )
}

export default About