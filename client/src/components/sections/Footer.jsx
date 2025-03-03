import { FaAtlas, FaEnvelope, FaMap, FaPhone } from "react-icons/fa"
import BgForm from "../BgForm"
import ContactButton from "../ContactButton"
import { BiPlanet } from "react-icons/bi"
import FunnyCircles from "./FunnyCircles"

const contacts = [
    {
        icon: <FaPhone />,
        text: 'WhatsApp',
        href: 'https://wa.me/5541987304848'
    },
    {
        icon: <FaEnvelope />,
        text: 'Email',
        href: 'mailto:leoobrant@hotmail.com'
    }
    // {
    //     icon: <BiPlanet />,
    //     text: 'Curitiba',
    //     href: '/'
    // },
]

const today = new Date()

const Footer = () => {
    return (
        <>
            <div className="flex flex-col items-center mt-72">

                <div className="font-sans-3 text-5xl text-center max-w-lg mb-12">Pronto para ter o site que sua empresa merece?</div>

                <ContactButton text="entrar em contato hoje" />

                <div className="absolute up-and-down w-40 -z-10">
                    <div className="relative">
                        <div className="absolute top-0 rounded-full aspect-square blur w-full border-[1px] border-white" />
                        <div className="absolute top-0 rounded-full aspect-square blur w-full border-[1px] border-white" />
                        <div className="absolute top-0 rounded-full aspect-square blur w-full border-[1px] border-white" />
                        <div className="absolute top-0 rounded-full aspect-square blur w-full border-[1px] border-white" />
                        <div className="absolute top-0 rounded-full aspect-square blur w-full border-[1px] border-white" />
                        <div className="rounded-full aspect-square w-full border-[1px] border-white backdrop-blur-md" />
                    </div>
                </div>

                <div className="bg-cyan-600/50 rounded-full w-48 aspect-square -z-20 delayed-up-and-down" />

            </div>

            <div className="bg-black/50 px-4 pt-12 mt-48
            lg:px-10 lg:pt-4">
                <div className="flex flex-col md:text-center
                lg:flex-row lg:items-center">
                    <div className="font-sans-3 text-4xl
                    lg:w-1/2 lg:text-center lg:text-5xl tracking-wider">
                        <span className="text-white/60">Leonardo</span> Brandt</div>

                    <div className="mt-4 flex flex-col gap-4
                    lg:flex-row lg:justify-around lg:w-1/2">
                        <div>
                            <h1 className="text-2xl font-sans-3">Quick links</h1>
                            <div className="flex flex-col mt-2 gap-2">
                                <a href="/">Inicio</a>
                                <a href="#about">Sobre</a>
                                <a href="#services">Serviços</a>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-2xl font-sans-3">Contatos</h1>
                            <div className='flex flex-col gap-2 mt-2 md:items-center'>
                                {contacts.map((props, index) => (
                                    <div className="flex items-center gap-2" key={index}>
                                        {props.icon}
                                        <a href={props.href} target="_blank">{props.text}</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-4 mt-4 border-t-[1px] border-cyan-50 text-center">
                    &copy; Copyright {today.getFullYear()} - Leonardo Brandt
                </div>
            </div>

        </>
    )
}

export default Footer