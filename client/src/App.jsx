import AboutSection from "./components/sections/AboutSection"
import ContactButtonSection from "./components/sections/ContactButtonSection"
import EfficiencySection from "./components/sections/EfficiencySection"
import Footer from "./components/sections/Footer"
import Header from "./components/sections/Header"
import Hero from "./components/sections/Hero"
import PortfolioSection from "./components/sections/PortfolioSection"
import PricesSection from "./components/sections/PricesSection"
import ServicesSection from "./components/sections/ServicesSection"

function App() {

    return (
        <div className="">
            <div className="px-4 mt-4 lg:px-10 lg:pt-6 font-sans-1 scroll-smooth
        lg:max-w-[1600px] lg:mx-auto">
                <Header />

                <Hero />

                <AboutSection />

                <ContactButtonSection />

                <ServicesSection />

                <PortfolioSection />

                <EfficiencySection />

                {/* <PricesSection /> */}

            </div>
            <Footer />
        </div>
    )
}

export default App