import { FaAtlas, FaEnvelope, FaMap, FaPhone } from "react-icons/fa"
import BgForm from "../BgForm"
import ContactButton from "../ContactButton"
import { BiPlanet } from "react-icons/bi"
import FunnyCircles from "./FunnyCircles"

const contacts = [
    {
        icon: <FaPhone />,
        text: 'WhatsApp',
        href: '/'
    },
    {
        icon: <FaEnvelope />,
        text: 'Email',
        href: '/'
    },
    {
        icon: <BiPlanet />,
        text: 'Curitiba',
        href: '/'
    },
]

const today = new Date()

const Footer = () => {
    return (
        <>
            <div className="flex flex-col items-center pt-48">

                <div className="font-sans-3 text-5xl text-center max-w-lg">Pronto para ter o site que sua empresa precisa?</div>

                <div className="mt-12 scale-110">
                    <ContactButton text="entrar em contato hoje" />
                </div>

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

            <div className="bg-black/50 -mx-4 px-4 pt-12 mt-12
            lg:-mx-10 lg:px-10 lg:pt-4">
                <div className="flex flex-col md:text-center
                lg:flex-row lg:items-center">
                    <div className="font-sans-3 text-4xl
                    lg:w-1/2 lg:text-center lg:text-7xl">
                        CWB WEB DESIGN</div>

                    <div className="mt-4 flex flex-col gap-4
                    lg:flex-row lg:justify-around lg:w-1/2">
                        <div>
                            <h1 className="text-2xl font-sans-3">Quick links</h1>
                            <div className="flex flex-col mt-2 gap-2">
                                <a href="/">Home</a>
                                <a href="/">About</a>
                                <a href="/">Services</a>
                                <a href="/">Prices</a>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-2xl font-sans-3">Contact Information</h1>
                            <div className='flex flex-col gap-2 mt-2 md:items-center'>
                                {contacts.map((props, index) => (
                                    <div className="flex items-center gap-2">
                                        {props.icon}
                                        <a href={props.href}>{props.text}</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-4 mt-4 border-t-[1px] border-cyan-50 text-center">
                    &copy; Copyright {today.getFullYear()} CWB Web Design
                </div>
            </div>

        </>
    )
}

export default Footer