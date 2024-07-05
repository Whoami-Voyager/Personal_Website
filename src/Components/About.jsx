import { Link } from "react-router-dom"
import ProjectCard from "./ProjectCard"
import { SiAdobelightroom, SiFlask, SiCloudinary, SiLeaflet } from "react-icons/si";
import { IoLogoJavascript, IoLogoGithub } from "react-icons/io5";
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaCamera, FaLinkedin } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function About() {
    return (
        <div className="bg-appleBeige h-full">
            <div className="flex flex-row font-ThinkDifferent">
                <h1 className="m-12 select-none text-center text-4xl lg:text-5xl w-1/5">Jonathan McIntosh</h1>
                <div className="flex flex-col -skew-x-12 w-full m-6 lg:mr-12">
                    <div className="block m-0.5 bg-ripeMango h-5 w-full"></div>
                    <div className="block m-0.5 bg-princetonOrange h-5 w-full"></div>
                    <div className="block m-0.5 bg-apple h-5 w-full"></div>
                    <div className="block m-0.5 bg-jasper h-5 w-full"></div>
                    <div className="block m-0.5 bg-plum h-5 w-full"></div>
                    <div className="block m-0.5 bg-richElectricBlue h-5 w-full"></div>
                </div>
            </div>
            <nav className="font-ThinkDifferent m-4 flex flex-col items-center sm:flex-row sm:justify-center lg:justify-around lg:m-8">
                <Link className="text-lg p-2 w-36 hover:text-terminalGreen hover:border-black hover:bg-black hover:scale-105 transition transform duration-100 border-4 border-appleAccent rounded-md text-center m-2" to="/coding">Coding Projects</Link>
                <Link className="text-lg p-2 w-36 hover:text-terminalGreen hover:border-black hover:bg-black hover:scale-105 transition transform duration-100 border-4 border-appleAccent rounded-md text-center m-2" to="/photography">Photography</Link>
            </nav>
            <div className="font-ThinkDifferent bg-appleBeige">
                <h2 className="font-Cooper text-center p-8 text-3xl md:text-4xl lg:text-5xl bg-appleBeige select-none">Projects:</h2>
                <ProjectCard />
            </div>
            <div className="font-ThinkDifferent bg-appleBeige p-8">
                <h2 className="font-Cooper text-center p-8 pt-12 text-3xl md:text-4xl lg:text-5xl bg-appleBeige select-none">Skills:</h2>
                <div className="flex flex-wrap justify-center gap-6 p-4 text-4xl">
                    <IoLogoJavascript />
                    <FaReact />
                    <FaPython />
                    <SiFlask />
                    <RiTailwindCssFill />
                    <FaHtml5 />
                    <FaCss3Alt />
                    <SiCloudinary />
                    <SiLeaflet />
                    <SiAdobelightroom />
                    <FaCamera />
                </div>
            </div>
            <h2 className="font-Cooper text-center p-8 pt-12 text-3xl md:text-4xl lg:text-5xl bg-appleBeige select-none">About myself:</h2>
            <div className="flex flex-col text-center items-center gap-4 lg:gap-12 bg-appleBeige">
                <p className="p-8 text-xl font-ttNorms">
                    Hello! My name is Jonathan McIntosh, and I am a full stack web developer with a background in photography and videography.<br />
                    With my 15 weeks at Flatiron School, I was able to learn Javascript, React, Python, Flask and even taught myself Tailwind CSS. Whatever I need to learn, I will learn quickly.<br />
                    If you would like to see my photography and videography portfolio, navigate to the top of the page and click photography. There you will see photos and videos I made.<br />
                </p>
                <div className="flex flex-row gap-5 lg:gap-10 items-center px-4">
                    <a href="/Resume.pdf" download="Resume.pdf">
                        <button className="bg-appleAccent lg:hover:scale-105 lg:hover:-translate-y-1 text-white font-Cooper text-xl p-3 rounded transition transform duration-300">Download Resume</button>
                    </a>
                    <a href="https://www.linkedin.com/in/jonathan-thomas-mcintosh/" target="_blank" className="lg:hover:scale-105 lg:hover:-translate-y-1 transition transform duration-300 text-5xl">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Whoami-Voyager" target="_blank" className="lg:hover:scale-105 lg:hover:-translate-y-1 transition transform duration-300 text-5xl">
                        <IoLogoGithub />
                    </a>
                </div>
            </div>
            <div className="flex justify-end text-sm pt-32 bg-appleBeige">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">🐇🐥🥚</a>
            </div>
        </div>
    )
}

export default About