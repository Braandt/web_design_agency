import { FaEnvelope, FaPhone } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
import SectionTitle from "./SectionTitle"
import { BiPlanet } from "react-icons/bi"
import { useEffect, useState } from "react"

const contacts = [
    {
        icon: <FaPhone />,
        text: '(41) 98730-4848',
        title: 'WhatsApp',
        href: 'https://wa.me/5541987304848'
    },
    {
        icon: <FaEnvelope />,
        text: 'leoobrandt@hotmail.com',
        title: 'Email',
        href: 'mailto:leoobrant@hotmail.com'
    },
    {
        icon: <BiPlanet />,
        text: 'Atendemos em todo o Brasil',
        title: 'Local',
        href: ''
    },
]

const ContactPopUp = ({ setContactPopUpIsOpen }) => {

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.keyCode === 27) {
                setContactPopUpIsOpen(false)
            }
        }

        document.addEventListener('keydown', handleKeyDown, true);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [setContactPopUpIsOpen])

    return (
        <div
            className="fixed flex items-center justify-center top-0 bottom-0 left-0 right-0 z-10"
        >
            < div
                onClick={() => setContactPopUpIsOpen(false)}
                className="absolute h-full w-full bg-black/80"
            />
            <div
                className="relative bg-cyan-950 p-6 rounded-xl w-[950px] max-w-[90%] z-20
                lg:p-20">

                <div
                    className="p-4 absolute top-0 right-0"
                    onClick={() => setContactPopUpIsOpen(false)}
                >
                    <IoClose />
                </div>
                <SectionTitle preTitle="contato" title="Fale com a gente 📢" />

                <p className="mt-2 font-sans normal-case text-base">
                    Envie um email e me conte tudo que você deseja ter em seu novo site. Respondo a todos dentro de 24 horas. Ou me ligue e podemos conversar imediatamente 😉
                </p>

                <div className="flex flex-col mt-4 gap-4">
                    {contacts.map((item, index) => (
                        <a
                            target="_blank"
                            href={item.href}
                            key={index}
                            title={item.title}
                            className="flex items-center gap-6 w-fit p-2 rounded-full pr-12
                        hover:bg-white/10"
                        >
                            <div className="relative p-6 rounded-full">
                                <div className="absolute border blur-sm rounded-full top-0 bottom-0 left-0 right-0"></div>
                                <div className="absolute border blur-sm rounded-full top-0 bottom-0 left-0 right-0"></div>
                                <div className="absolute border rounded-full top-0 bottom-0 left-0 right-0"></div>
                                {item.icon}
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="font-sans-3 text-xl tracking-widest">{item.title}</div>
                                <div className="font-extralight font-sans text-base normal-case">{item.text}</div>
                            </div>
                        </a >
                    ))}
                </div>

            </div>
        </div >
    )
}

export default ContactPopUp