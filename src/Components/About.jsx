import { Link } from "react-router-dom"
import ProjectCard from "./ProjectCard"

function About() {
    return (
        <div className="bg-appleBeige h-full">
            <div className="flex flex-row font-ThinkDifferent">
                <h1 className="m-12 select-none text-center text-4xl lg:text-5xl w-1/5">Jonathan McIntosh</h1>
                <div className="flex flex-col -skew-x-12 w-full m-6">
                    <div className="block m-0.5 bg-apple h-5 w-full"></div>
                    <div className="block m-0.5 bg-ripeMango h-5 w-full"></div>
                    <div className="block m-0.5 bg-princetonOrange h-5 w-full"></div>
                    <div className="block m-0.5 bg-jasper h-5 w-full"></div>
                    <div className="block m-0.5 bg-plum h-5 w-full"></div>
                    <div className="block m-0.5 bg-richElectricBlue h-5 w-full"></div>
                </div>
            </div>
            <nav className="font-ThinkDifferent m-4 flex flex-col items-center sm:flex-row sm:justify-center lg:justify-around lg:m-8">
                <Link className="text-lg p-2 w-36 hover:text-terminalGreen hover:bg-black hover:scale-105 transition transform duration-100 border-4 border-black rounded-md text-center m-2" to="/coding">Coding Projects</Link>
                <Link className="text-lg p-2 w-36 hover:text-terminalGreen hover:bg-black hover:scale-105 transition transform duration-100 border-4 border-black rounded-md text-center m-2" to="/photography">Photography</Link>
            </nav>
            <div className="font-ThinkDifferent bg-appleBeige">
                <p className="m-8 text-xl lg:text-center lg:text-3xl">Hey! I'm Jonathan and this is me just starting my development of my personal website. Here are some projects I have made:</p>
                <ProjectCard />
            </div>
            <h1 className="font-Cooper text-center p-8 text-xl md:pt-32 lg:text-4xl bg-appleBeige">About myself:</h1>
            <div className="flex flex-col items-center gap-4 lg:gap-12 bg-appleBeige">
                <p>Hello! My name is Jonathan McIntosh, and I am a </p>
                <a href="/Resume.pdf" download="Resume.pdf">
                    <button className="bg-appleAccent hover:scale-105 hover:-translate-y-1 text-white font-Cooper text-2xl py-2 px-4 rounded transition transform duration-300">Resume</button>
                </a>
            </div>
            <div className="flex justify-end text-sm bg-appleBeige">
                <Link to="/easter-egg">🐇🐥🥚</Link>
            </div>
        </div>
    )
}

export default About