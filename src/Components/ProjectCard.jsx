function ProjectCard() {
    return (
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 m-2 bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:shadow-xl hover:scale-105">
                <div className="p-6">
                    <h1 className="text-2xl 2xl:text-3xl mb-2 font-Cooper">LandmarkLore</h1>
                    <h2 className="text-xl mb-2">May 2024</h2>
                    <a href="https://github.com/Whoami-Voyager/LandmarkLore" target="_blank" className="text-appleAccent hover:underline">GitHub Link</a>
                    <p className="text-base mt-2">My Phase 5 or capstone project for Flatiron School, I was able to build a website to tell stories using Leaflet.js. I also built it with image uploading using Cloudinary.</p>
                </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 m-2 bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:shadow-xl hover:scale-105">
                <div className="p-6">
                    <h1 className="text-2xl 2xl:text-3xl mb-2 font-Cooper">InstaVibe</h1>
                    <h2 className="text-xl mb-2">May 2024</h2>
                    <a href="https://github.com/Whoami-Voyager/InstaVibe" target="_blank" className="text-appleAccent hover:underline">GitHub Link</a>
                    <p className="text-base mt-2">My Phase 4 project, I collaborated with a classmate for my first full-stack project. Using a React frontend and a Flask backend, I was able to build an Instagram replica.</p>
                </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 m-2 bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:shadow-xl hover:scale-105">
                <div className="p-6">
                    <h1 className="text-2xl 2xl:text-3xl mb-2 font-Cooper">CarChronicle</h1>
                    <h2 className="text-xl mb-2">April 2024</h2>
                    <a href="https://github.com/Whoami-Voyager/CarChronicle" target="_blank" className="text-appleAccent hover:underline">GitHub Link</a>
                    <p className="text-base mt-2">My Phase 3 project, this was my project that introduced me to Python. A CLI, I used a web scraper beautiful soup to fill the SQL tables, and used Python classes to navigate the ORM.</p>
                </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 m-2 bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:shadow-xl hover:scale-105">
                <div className="p-4">
                    <h1 className="text-2xl 2xl:text-3xl mb-2 font-Cooper">TechHistoria</h1>
                    <h2 className="text-xl mb-2">March 2024</h2>
                    <div className="flex flex-col gap-3">
                        <a href="https://whoami-voyager.github.io/TechHistoria/" target="_blank" className="text-appleAccent hover:underline">Deployed Website</a>
                        <a href="https://github.com/Whoami-Voyager/TechHistoria" target="_blank" className="text-appleAccent hover:underline">GitHub Link</a>
                    </div>
                    <p className="text-base mt-2">My Phase 2 project, This was my first website built using React. It also allowed me to start using Tailwind CSS, which made it easier to build my first website with responsive design.</p>
                </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 m-2 bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:shadow-xl hover:scale-105">
                <div className="p-6">
                    <h1 className="text-2xl 2xl:text-3xl mb-2 font-Cooper">LeMans 100</h1>
                    <h2 className="text-xl mb-2">February 2024</h2>
                    <div className="flex flex-col gap-3">
                        <a href="https://www.thelemans24.com/" target="_blank" className="text-appleAccent hover:underline">Deployed Website</a>
                        <a href="https://github.com/thekaleabsamuel/Le-mans-100-v1" target="_blank" className="text-appleAccent hover:underline">GitHub Link</a>
                    </div>
                    <p className="text-base mt-2">My Phase 1 project, I collaborated with a classmate to create a vanilla Javascript website. I used this project to expand my knowledge of flexbox in CSS, and using custom fonts with styling all around the page.</p>
                </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 m-2 bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:shadow-xl hover:scale-105">
                <div className="p-6">
                    <h1 className="text-2xl 2xl:text-3xl mb-2 font-Cooper">My Favorite Things</h1>
                    <h2 className="text-xl mb-2">November 2023</h2>
                    <div className="flex flex-col gap-3">
                        <a href="https://whoami-voyager.github.io/My-Favorite-Things/" target="_blank" className="text-appleAccent hover:underline">Deployed Website</a>
                        <a href="https://github.com/Whoami-Voyager/My-Favorite-Things" target="_blank" className="text-appleAccent hover:underline">GitHub Link</a>
                    </div>
                    <p className="text-base mt-2">For my prework at Flatiron School, I had a final project to create my first website using HTML, CSS and a little Javascript. I was not required to do Javascript, but it was fun doing a keyframe animation.</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;