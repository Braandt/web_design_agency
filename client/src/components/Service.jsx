import { FaExternalLinkAlt } from "react-icons/fa"

const Service = ({ title, text, src, href }) => {
    return (
        <a
            href={href}
            className="relative group transition-all rounded-xl p-6 max-w-xl
        hover:shadow-2xl hover:bg-cyan-950"
            target="_blank"
            title={title}
        >
            <img className="group-hover:scale-105 transition-all  w-full mx-auto" src={src} alt="" />
            <div className="font-sans-3 text-2xl">{title}</div>
            <div className="mt-2 text-sm">
                {text}
            </div>

            <div className="flex opacity-0 absolute items-center justify-center aspect-square w-12 -top-4 right-4 bg-cyan-900 shadow-xl rounded-md transition-all
            group-hover:opacity-100">
                <FaExternalLinkAlt className="text-cyan-50" size={25} />
            </div>
        </a>
    )
}

export default Service