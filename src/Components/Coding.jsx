import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

function Coding() {
    return (
        <>
            <div className="p-4 text-xl font-ttNorms">
                <Link to='/' className="hover:underline">⬅ Home</Link>
            </div>
            <div className="min-h-screen flex flex-col justify-center items-center mx-4 text-center">
                <div className="flex flex-row items-center space-x-4">
                    <img src="https://cdn-icons-png.flaticon.com/128/3967/3967195.png" alt="Under Construction Icon"/>
                    <h1 className="font-ttNorms text-3xl">This part is under construction. Come back later.</h1>
                    <img src="https://cdn-icons-png.flaticon.com/128/3967/3967195.png" alt="Under Construction Icon"/>
                </div>
            </div>
        </>
    );
}

export default Coding;