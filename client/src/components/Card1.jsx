import { FaMobile } from 'react-icons/fa'

const Card1 = ({ icon, title, text }) => {

    return (
        <div className="bg-gradient-to-br bg-black/50 p-6 rounded-2xl h-fit transition-all group cursor-default
        hover:from-cyan-900/50 hover:to-yellow-500/10 hover:shadow-xl">

            <div className="flex items-center justify-center bg-cyan-950 aspect-square w-16 rounded-xl -mt-16 transition-all
            group-hover:bg-cyan-50">
                {icon}
            </div>
            <p className="uppercase font-sans-3 text-xl mt-4">
                {title}
            </p>
            <p className="mt-2 mb-6">
                {text}
            </p>
        </div>
    )
}

export default Card1