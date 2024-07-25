import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { SiAdobelightroom, SiFlask, SiCloudinary, SiLeaflet } from "react-icons/si";
import { IoLogoJavascript, IoLogoGithub } from "react-icons/io5";
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaCamera, FaLinkedin } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function About() {
    return (
        <div className="bg-appleBeige h-full">
            <div className="flex flex-col 2xl:flex-row w-full">
                <header className="flex flex-row items-center font-ThinkDifferent w-full">
                    <h1 className="m-12 select-none text-center text-4xl lg:text-5xl w-1/5">Jonathan McIntosh</h1>
                    <div className="flex flex-col -skew-x-12 w-full m-6 lg:mr-12">
                        <div className="block m-0.5 bg-[#FBC02D] h-5 w-full"></div>
                        <div className="block m-0.5 bg-[#FB8C00] h-5 w-full"></div>
                        <div className="block m-0.5 bg-[#E53935] h-5 w-full"></div>
                        <div className="block m-0.5 bg-[#C2185B] h-5 w-full"></div>
                        <div className="block m-0.5 bg-[#7B1FA2] h-5 w-full"></div>
                        <div className="block m-0.5 bg-[#1976D2] h-5 w-full"></div>
                    </div>
                </header>
                <nav className="font-ThinkDifferent m-4 flex flex-col items-center sm:flex-row sm:justify-center lg:justify-around lg:m-8">
                    <Link className="text-lg p-2 m-2 w-36 hover:text-terminalGreen hover:border-black hover:bg-black hover:scale-105 transition transform border-4 border-appleAccent rounded-md text-center" to="/coding">Coding Projects</Link>
                    <Link className="text-lg p-2 m-2 w-36 hover:text-terminalGreen hover:border-black hover:bg-black hover:scale-105 transition transform border-4 border-appleAccent rounded-md text-center" to="/photography">Photography</Link>
                </nav>
            </div>
            <main className="2xl:flex 2xl:flex-grow 2xl:justify-start">
                <section className="font-ThinkDifferent bg-appleBeige md:p-8">
                    <h2 className="font-Cooper text-center p-8 pt-12 text-3xl md:text-4xl lg:text-5xl bg-appleBeige select-none">Projects:</h2>
                    <ProjectCard />
                </section>
                <section className="font-ThinkDifferent bg-appleBeige p-8">
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
                </section>
                <section className="bg-appleBeige p-8">
                    <h2 className="font-Cooper text-center p-8 pt-12 text-3xl md:text-4xl lg:text-5xl select-none">About myself:</h2>
                    <div className="flex flex-col text-center items-center gap-4 lg:gap-12">
                        <p className="p-8 text-3xl font-Teko">
                            Hello! I'm Jonathan McIntosh, a full stack web developer with a background in photography and videography.<br />
                            During my 15 weeks at Flatiron School, I mastered JavaScript, React, Python, Flask, and taught myself Tailwind CSS. I am a quick learner, always ready to acquire new skills.<br />
                            To view my photography and videography portfolio, click on "Photography" at the top of the page to see my work.<br />
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
                </section>
            </main>
            <footer className="flex justify-end text-sm pt-32 bg-appleBeige">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">🐇🐥🥚</a>
            </footer>
        </div>
    )
}

export default About;