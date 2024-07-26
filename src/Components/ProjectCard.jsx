import { SiFlask, SiCloudinary, SiLeaflet } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function ProjectCard() {
    return (
        <section className="flex flex-wrap justify-center gap-6 lg:gap-8">
            <article className="card">
                <header>
                    <h1 className="text-2xl 2xl:text-3xl mb-2 font-Cooper">LandmarkLore</h1>
                </header>
                <div className="flex flex-row gap-4 text-3xl my-4">
                    <FaReact />
                    <RiTailwindCssFill />
                    <FaPython />
                    <SiFlask />
                    <SiLeaflet />
                    <SiCloudinary />
                </div>
                <div className="flex flex-col">
                    <time className="text-xl mb-2">May 2024</time>
                    <a href="https://github.com/Whoami-Voyager/LandmarkLore" target="_blank" className="text-appleAccent lg:hover:underline">GitHub Link</a>
                </div>
                <p className="text-base mt-2">For my Phase 5 capstone project at Flatiron School, I built LandmarkLore, a website that uses Leaflet.js for storytelling and Cloudinary for image uploading.</p>
            </article>
            <article className="card">
                <header>
                    <h1 className="text-2xl 2xl:text-3xl mb-2 font-Cooper">InstaVibe</h1>
                </header>
                <div className="flex flex-row gap-4 text-3xl my-4">
                    <FaReact />
                    <RiTailwindCssFill />
                    <FaPython />
                    <SiFlask />
                </div>
                <div className="flex flex-col">
                    <time className="text-xl mb-2">May 2024</time>
                    <a href="https://github.com/Whoami-Voyager/InstaVibe" target="_blank" className="text-appleAccent lg:hover:underline">GitHub Link</a>
                </div>
                <p className="text-base mt-2">InstaVibe, my Phase 4 project, is an Instagram replica built with a React frontend and Flask backend. This was my first full-stack project, developed in collaboration with a classmate.</p>
            </article>
            <article className="card">
                <header>
                    <h1 className="text-2xl 2xl:text-3xl mb-2 font-Cooper">CarChronicle</h1>
                </header>
                <div className="flex flex-row gap-4 text-3xl my-4">
                    <FaPython />
                </div>
                <div className="flex flex-col">
                    <time className="text-xl mb-2">April 2024</time>
                    <a href="https://github.com/Whoami-Voyager/CarChronicle" target="_blank" className="text-appleAccent lg:hover:underline">GitHub Link</a>
                </div>
                <p className="text-base mt-2">CarChronicle, my Phase 3 project, introduced me to Python. This CLI app uses Beautiful Soup for web scraping and populating SQL tables, with Python classes for ORM navigation.</p>
            </article>
            <article className="card">
                <header>
                    <h1 className="text-2xl 2xl:text-3xl mb-2 font-Cooper">TechHistoria</h1>
                </header>
                <div className="flex flex-row gap-4 text-3xl my-4">
                    <FaReact />
                    <RiTailwindCssFill />
                </div>
                <time className="text-xl mb-2">March 2024</time>
                <div className="flex flex-col gap-3">
                    <a href="https://whoami-voyager.github.io/TechHistoria/" target="_blank" className="text-appleAccent lg:hover:underline">Deployed Website</a>
                    <a href="https://github.com/Whoami-Voyager/TechHistoria" target="_blank" className="text-appleAccent lg:hover:underline">GitHub Link</a>
                </div>
                <p className="text-base mt-2">My Phase 2 project, This was my first website built using React. It also allowed me to start using Tailwind CSS, which made it easier to build my first website with responsive design.</p>
            </article>
            <article className="card">
                <header>
                    <h1 className="text-2xl 2xl:text-3xl mb-2 font-Cooper">LeMans 100</h1>
                </header>
                <div className="flex flex-row gap-4 text-3xl my-4">
                    <IoLogoJavascript />
                    <FaHtml5 />
                    <FaCss3Alt />
                </div>
                <time className="text-xl mb-2">February 2024</time>
                <div className="flex flex-col gap-3">
                    <a href="https://www.thelemans24.com/" target="_blank" className="text-appleAccent lg:hover:underline">Deployed Website</a>
                    <a href="https://github.com/thekaleabsamuel/Le-mans-100-v1" target="_blank" className="text-appleAccent lg:hover:underline">GitHub Link</a>
                </div>
                <p className="text-base mt-2">My Phase 1 project, I collaborated with a classmate to create a vanilla Javascript website. I used this project to expand my knowledge of flexbox in CSS, and using custom fonts with styling all around the page.</p>
            </article>
            <article className="card">
                <header>
                    <h1 className="text-2xl 2xl:text-3xl mb-2 font-Cooper">My Favorite Things</h1>
                </header>
                <div className="flex flex-row gap-4 text-3xl my-4">
                    <IoLogoJavascript />
                    <FaHtml5 />
                    <FaCss3Alt />
                </div>
                <time className="text-xl mb-2">November 2023</time>
                <div className="flex flex-col gap-3">
                    <a href="https://whoami-voyager.github.io/My-Favorite-Things/" target="_blank" className="text-appleAccent lg:hover:underline">Deployed Website</a>
                    <a href="https://github.com/Whoami-Voyager/My-Favorite-Things" target="_blank" className="text-appleAccent lg:hover:underline">GitHub Link</a>
                </div>
                <p className="text-base mt-2">For my prework at Flatiron School, I had a final project to create my first website using HTML, CSS and a little Javascript. I was not required to do Javascript, but it was fun doing a keyframe animation.</p>
            </article>
        </section>
    );
}

export default ProjectCard;