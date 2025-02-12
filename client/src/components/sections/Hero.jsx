import BgForm from "../BgForm"
import ContactButton from '../ContactButton'

const Hero = () => {
    return (
        <div
            className="my-6 flex items-center flex-col
            md:mt-12
            lg:flex-row lg:justify-center lg:px-12 lg:mt-24"
        >

            {/* Background */}
            <div className="absolute top-0 left-0 h-screen w-full -z-10">
                <BgForm />
            </div>
            {/* --- */}

            <div
                className="flex flex-col text-center items-center
                lg:text-left lg:items-start lg:w-1/2"
            >
                <p
                    className="uppercase font-sans-3 tracking-widest
                lg:text-lg"
                >
                    projetado sob medida
                </p>

                <p
                    className="text-4xl mt-1 uppercase font-sans-3 max-w-[80%]
                    lg:text-6xl"
                >
                    Websites para empresas locais
                </p>

                <p
                    className="font-sans text-sm mt-4 max-w-[80%]
                lg:text-lg"
                >
                    Sites programados 100% sob medida, sem criador de site automático. Resultado superior incluindo Google Ads e serviços de SEO
                </p>

                <div
                    className="flex uppercase gap-6 mt-6 text-xl font-sans-3 tracking-wider
                lg:mt-10 lg:text-2xl lg:gap-10"
                >
                    <ContactButton />

                    <a
                        className="flex items-center scroll-smooth"
                        title="saiba mais"
                        href="#portfolio"
                    >
                        Saber mais
                    </a>
                </div>
            </div>

            <div className="mt-12 lg:hidden">
                <img className="" src="/laptop.webp" alt="" />
            </div>

            <div className="mt-12 hidden h-full w-1/2 lg:block">
                <img className="h-full w-full object-contain" src="/laptop.png" alt="" />
            </div>
        </div>
    )
}

export default Hero