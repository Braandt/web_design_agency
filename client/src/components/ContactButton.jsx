import { useState } from "react"
import ContactPopUp from "./ContactPopUp"

const ContactButton = ({ text = 'entrar em contato' }) => {

    const [contactPopUpIsOpen, setContactPopUpIsOpen] = useState(false)

    const handleClick = () => {
        setContactPopUpIsOpen(prevState => !prevState)
    }

    return (
        <>
            <div
                onClick={() => handleClick()}
                className="relative group uppercase bg-cyan-50 py-2 px-4 rounded-full text-cyan-950 font-sans-3 text-2xl shadow-lg transition-all border-cyan-50/10 from-black/80 to-cyan-950 cursor-pointer
        hover:text-cyan-50 hover:bg-gradient-to-t hover:shadow-xl active:shadow-none"
            >
                {text}

                <div className="absolute top-0 left-0 h-full w-full bg-cyan-500 blur rounded-full -z-10
            group-hover:bg-cyan-950"></div>
            </div>

            {contactPopUpIsOpen && <ContactPopUp setContactPopUpIsOpen={setContactPopUpIsOpen} />}
        </>
    )
}

export default ContactButton