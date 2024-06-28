function ProjectCard() {
    return (
        <>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 m-2 bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:shadow-xl hover:scale-105">
                    <div className="p-6">
                        <h1 className="text-3xl mb-2 font-Retro">LandmarkLore</h1>
                        <h2 className="text-xl mb-2">May 2024</h2>
                        <a href="https://github.com/Whoami-Voyager/LandmarkLore" target="_blank" className="text-appleAccent hover:underline">GitHub Link</a>
                        <p className="text-base mt-2">Description</p>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 m-2 bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:shadow-xl hover:scale-105">
                    <div className="p-6">
                        <h1 className="text-3xl mb-2 font-Retro">InstaVibe</h1>
                        <h2 className="text-xl mb-2">May 2024</h2>
                        <a href="https://github.com/Whoami-Voyager/InstaVibe" target="_blank" className="text-appleAccent hover:underline">GitHub Link</a>
                        <p className="text-base mt-2">Description</p>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 m-2 bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:shadow-xl hover:scale-105">
                    <div className="p-6">
                        <h1 className="text-3xl mb-2 font-Retro">CarChronicle</h1>
                        <h2 className="text-xl mb-2">April 2024</h2>
                        <a href="https://github.com/Whoami-Voyager/CarChronicle" target="_blank" className="text-appleAccent hover:underline">GitHub Link</a>
                        <p className="text-base mt-2">Description</p>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 m-2 bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:shadow-xl hover:scale-105">
                    <div className="p-4">
                        <h1 className="text-3xl mb-2 font-Retro">TechHistoria</h1>
                        <h2 className="text-xl mb-2">March 2024</h2>
                        <div className="flex flex-col gap-3">
                            <a href="https://whoami-voyager.github.io/TechHistoria/" target="_blank" className="text-appleAccent hover:underline">Deployed Website</a>
                            <a href="https://github.com/Whoami-Voyager/TechHistoria" target="_blank" className="text-appleAccent hover:underline">GitHub Link</a>
                        </div>
                        <p className="text-base mt-2">Description</p>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 m-2 bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:shadow-xl hover:scale-105">
                    <div className="p-6">
                        <h1 className="text-3xl mb-2 font-Retro">LeMans 100</h1>
                        <h2 className="text-xl mb-2">February 2024</h2>
                        <div className="flex flex-col gap-3">
                            <a href="https://www.thelemans24.com/" target="_blank" className="text-appleAccent hover:underline">Deployed Website</a>
                            <a href="https://github.com/thekaleabsamuel/Le-mans-100-v1" target="_blank" className="text-appleAccent hover:underline">GitHub Link</a>
                        </div>
                        <p className="text-base mt-2">Description</p>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 m-2 bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:shadow-xl hover:scale-105">
                    <div className="p-6">
                        <h1 className="text-3xl mb-2 font-Retro">My Favorite Things</h1>
                        <h2 className="text-xl mb-2">November 2023</h2>
                        <div className="flex flex-col gap-3">
                            <a href="https://whoami-voyager.github.io/My-Favorite-Things/" target="_blank" className="text-appleAccent hover:underline">Deployed Website</a>
                            <a href="https://github.com/Whoami-Voyager/My-Favorite-Things" target="_blank" className="text-appleAccent hover:underline">GitHub Link</a>
                        </div>
                        <p className="text-base mt-2">Description</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;