import { Link } from "react-router-dom"

function ErrorPage() {
    return (
        <>
            <div className="p-4 font-ttNorms text-xl">
                <Link to='/'>⬅ Home</Link>
            </div>
            <h1 className="text-center text-xl m-8 font-ttNorms">Oops, looks like you found the error page. Anyway, here's a cool video:</h1>
            <iframe
                width="966"
                height="543"
                className="mx-auto my-12"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
        </>
    )
}

export default ErrorPage