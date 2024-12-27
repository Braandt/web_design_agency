import BgForm from "../BgForm"
import ContactButton from '../ContactButton'

const Hero = () => {
    return (
        <div
            className="flex flex-col gap-6 items-center h-[calc(100vh-80px)] justify-center pt-24
            md:mt-6
            lg:flex-row lg:max-w-7xl lg:mx-auto"
        >

            {/* Background */}
            <div className="absolute top-0 left-0 h-screen w-full -z-10">
                <BgForm />
            </div>
            {/* --- */}

            <div
                className="flex flex-col text-center items-center
                lg:text-left lg:items-start"
            >
                <p
                    className="uppercase font-sans-3 tracking-widest
                lg:text-lg"
                >
                    projetado sob medida
                </p>

                <p
                    className="text-4xl mt-1 uppercase font-sans-3
                    lg:text-6xl"
                >
                    Websites para empresas locais
                </p>

                <p
                    className="font-sans text-sm mt-4
                lg:text-lg"
                >
                    Sites programados 100% sob medida, sem criador de site automático. Resultado superior incluindo Google Ads e serviços de SEO
                </p>

                <div
                    className="flex uppercase gap-6 mt-6 text-xl font-sans-3 tracking-wider
                lg:mt-10 lg:text-2xl lg:gap-10"
                >
                    <ContactButton />

                    <button>Saber mais</button>
                </div>
            </div>

            <div className="mt-12 lg:hidden">
                <img className="" src="/laptop.webp" alt="" />
            </div>

            <div className="mt-12 hidden h-full lg:block">
                <img className="h-full w-full object-contain" src="/laptop.png" alt="" />
            </div>
        </div>
    )
}

export default Hero