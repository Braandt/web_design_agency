import { GiCheckMark } from "react-icons/gi"
import SectionTitle from "../SectionTitle"
import ContactButton from "../ContactButton"
import ContactButtonSection from "./ContactButtonSection"

const services = [
    {
        title: '100% SECURE',
        text: 'Our sites are just static HTML and CSS code, meaning there’s literally nothing that can be hacked.'
    },
    {
        title: '100 PAGESPEED SCORES',
        text: 'Our sites have zero bloat, zero waste, and built with purpose so we get perfect 98-100/100 speed scores with Google.'
    },
    {
        title: 'UNMATCHED SUPPORT',
        text: 'Call or text us anytime, no phone trees or robots. When you call us you get me - the owner and developer.'
    },
    {
        title: 'CUSTOM DESIGNED',
        text: 'Our designs are made by an in-house design team, which allows us to make anything we want.'
    },
    {
        title: 'MONEY BACK GUARANTEE',
        text: 'If we can’t design something you like, you get your money back and the contract is cancelled. We stand by our work.'
    },
    {
        title: 'WE KNOW SEO',
        text: 'No snake oil, no tricks, no lies. We explain very clearly what SEO is, how it works, and what we can do to get you ranking.'
    },
]

const ServiceItem = ({ title, text }) => {
    return (
        <div>
            <div className="flex gap-4 font-sans-3 text-xl tracking-widest items-center">
                <GiCheckMark className="text-cyan-500" />
                <div>
                    {title}
                </div>
            </div>
            <div className="mt-2 text-sm">
                {text}
            </div>
        </div>
    )
}

const ServicesSection = () => {
    return (
        <div className="flex flex-col items-center
        lg:flex-row lg:items-start lg:gap-12">

            <div className="relative w-fit
            lg:w-1/2">
                <img className="rounded-3xl object-cover w-full" src="/Profile.png" alt="" />
                <div className="absolute bottom-2 right-2 p-2 flex flex-col text-xl px-4 bg-cyan-50 rounded-2xl text-cyan-950">
                    <div className="font-sans-3">
                        Leonardo Brandt
                    </div>
                    <div className="text-sm">
                        Proprietário desenvolvedor
                    </div>
                </div>
            </div>

            <div className="mt-8
            lg:w-1/2">
                <SectionTitle preTitle='O que nós oferecemos' title='Website a partir de R$499 por mês' />

                <div className="mt-2">We offer $0 down for a standard 5 page small business website. If you need more than that then we have to do custom pricing based on the scope of work, number of additional pages, and time involved. 12 month minimum contract. Includes design, development, hosting, unlimited edits, 24/7 support, and lifetime updates.</div>

                <div className="flex flex-col gap-4 mt-8 mx-auto bg-black/20 p-4
                md:max-w-4xl
                lg:grid lg:grid-cols-2">
                    {services.map((props, index) => (
                        <ServiceItem title={props.title} text={props.text} key={index} />
                    ))}
                </div>

                <div className="flex mt-10">
                    <ContactButton />
                </div>
            </div>

        </div>
    )
}

export default ServicesSection