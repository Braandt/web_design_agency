import SectionTitle from "../SectionTitle"
import Service from "../Service"

const services = [
    {
        title: 'Projeto 1',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perspiciatis recusandae commodi molestias dicta neque alias eveniet assumenda tempora quis?',
        src: 'service-1.avif'
    },
    {
        title: 'Projeto 2',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perspiciatis recusandae commodi molestias dicta neque alias eveniet assumenda tempora quis?',
        src: 'service-2.avif'
    },
    {
        title: 'Projeto 3',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perspiciatis recusandae commodi molestias dicta neque alias eveniet assumenda tempora quis?',
        src: 'service-3.avif'
    }
]

const PortfolioSection = () => {
    return (
        <div className="mt-24">
            <div className="lg:flex">
                <div className="lg:w-1/2">
                    <SectionTitle preTitle='portfolio' title='Projetos realizados' />
                </div>

                <div className="mt-2 lg:w-1/2">
                    Seja sua empresa um restaurante, uma construtora, uma agência de consultoria, start up, clínica de dermatologia, nós podemos desenvolver um website bonito e eficiente que funciona sem bugs e atrasos adequado para a sua indústria.
                </div>
            </div>

            <div
                className="mt-8 flex flex-col items-center
                lg:flex-row lg:gap-12"
            >
                {services.map((props, index) => (
                    <Service title={props.title} text={props.text} src={props.src} key={index} />
                ))}
            </div>
        </div>
    )
}

export default PortfolioSection