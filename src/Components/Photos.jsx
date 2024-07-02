import { Link } from "react-router-dom";

function Photos() {
    return (
        <div className="bg-black font-ttNorms text-white">
            <div className="p-4 text-xl">
                <Link to='/' className="hover:underline">⬅ Home</Link>
            </div>
            <p className="text-center m-8">
                Almost all the videos created on
                <a href="https://www.lakeofthetrees.com/camp-media/camp-media-2023" target="_blank" className="text-blue-400 hover:underline"> this page </a>
                were made by me, yes a little homemade but I had fun with them. Excuse the websites quality, I did not make it. Final Cut Pro experience.
            </p>
            <h2 className="text-xl m-8 text-center">Here is some of the best of my photography portfolio:</h2>
            <div className="flex flex-wrap justify-center items-center gap-4 p-4">
                <img src="https://live.staticflickr.com/65535/53829178095_85618073aa_k.jpg" alt="Photo 1" className="w-full sm:w-1/2 md:w-1/3 h-auto object-cover rounded-lg" />
                <img src="https://live.staticflickr.com/65535/53828980813_e349dce059_k.jpg" alt="Photo 2" className="w-full sm:w-1/2 md:w-1/3 h-auto object-cover rounded-lg" />
                <img src="https://live.staticflickr.com/65535/53828980438_97d50fe120_k.jpg" alt="Photo 3" className="w-full sm:w-1/2 md:w-1/3 h-auto object-cover rounded-lg" />
                <img src="https://live.staticflickr.com/65535/53828740271_65a62787f3_k.jpg" alt="Photo 4" className="w-full sm:w-1/2 md:w-1/3 h-auto object-cover rounded-lg" />
                <img src="https://live.staticflickr.com/65535/53829071574_b113fae027_k.jpg" alt="Photo 5" className="w-full sm:w-1/2 md:w-1/3 h-auto object-cover rounded-lg" />
                <img src="https://live.staticflickr.com/65535/53828981223_42866e3b90_k.jpg" alt="Photo 6" className="w-full sm:w-1/2 md:w-1/3 h-auto object-cover rounded-lg" />
                <img src="https://live.staticflickr.com/65535/53829178640_e9a4c07035_k.jpg" alt="Photo 7" className="w-full sm:w-1/2 md:w-1/3 h-auto object-cover rounded-lg" />
                <img src="https://live.staticflickr.com/65535/53829074329_13c3028c10_k.jpg" alt="Photo 8" className="w-full sm:w-1/2 md:w-1/3 h-auto object-cover rounded-lg" />
                <img src="https://live.staticflickr.com/65535/53829181495_de875eb4bd_k.jpg" alt="Photo 8" className="w-full sm:w-1/2 md:w-1/3 h-auto object-cover rounded-lg"/>
                <img src="https://live.staticflickr.com/65535/53828983843_4f1818d47f_k.jpg" alt="Photo 9" className="w-full sm:w-1/2 md:w-1/3 h-auto object-cover rounded-lg"/>
                <img src="https://live.staticflickr.com/65535/53828743726_11b57998e3_k.jpg" alt="Photo 10" className="w-full sm:w-1/2 md:w-1/3 h-auto object-cover rounded-lg"/>
            </div>
        </div>
    );
}

export default Photos;