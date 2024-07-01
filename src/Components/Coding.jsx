import { Link } from "react-router-dom";

function Coding() {
    return (
        <>
            <div className="p-4 text-xl font-ttNorms">
                <Link to='/' className="hover:underline">⬅ Home</Link>
            </div>
            <div className="min-h-screen flex flex-col justify-center items-center mx-4 text-center">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/3967/3967195.png"
                        alt="Under Construction Icon"
                        className="w-24 h-24 md:w-32 md:h-32"
                    />
                    <h1 className="font-ttNorms text-2xl md:text-3xl lg:text-4xl">
                        This part is under construction. Come back later.
                    </h1>
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/3967/3967195.png"
                        alt="Under Construction Icon"
                        className="w-24 h-24 md:w-32 md:h-32"
                    />
                </div>
            </div>
        </>
    );
}

export default Coding;