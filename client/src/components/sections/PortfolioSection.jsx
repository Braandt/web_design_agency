import SectionTitle from "../SectionTitle"
import Service from "../Service"

const services = [
    {
        title: 'Inclua - Recursos Educacionais',
        text: 'A Inclua é uma empresa curitibana que tem como objetivo desenvolver soluções para educação para todos seguindo o método de design universal que compreende as limitações de cada estudante.',
        src: 'portfolio/1.png',
        href: 'https://www.incluaedu.com/'
    },
    {
        title: 'Blog de Viagem',
        text: 'Blog pessoal de um viajante de bicicleta. Apresenta coleção de fotos e artigos que o autor pode criar e editar sem saber programação.',
        src: 'portfolio/2.png',
        href: 'https://travel-blog-leobrandt.vercel.app/'
    },
    {
        title: 'Linhas Meridionais',
        text: 'Serviço para empresa americana de acupuntura incluindo modelagem 3D e desenvolvimento utilizando ferramentas de visualização e interatividade com modelos 3D.',
        src: 'portfolio/3.png',
        href: 'https://meridianlines.vercel.app/'
    },
    {
        title: 'Marble Race',
        text: 'Mini game desenvolvido para projetos acadêmico americano, utilizando bibliotecas de interação e animações em 3 dimensões.',
        src: 'portfolio/4.png',
        href: 'https://marble-game-gamma.vercel.app/'
    },
    {
        title: 'Where in the world',
        text: 'Freelance para desenvolvedora americana. Desenvolvido com HTML, CSS e JavaScript webpage mostrar informações de todos os países listados.',
        src: 'portfolio/5.png',
        href: 'https://countries-page-one.vercel.app/'
    },
    {
        title: 'Space Travel',
        text: 'Template desenvolvido para empresa americana de expedições. Guardando o lugar de todos os elementos da página está uma possível vigem para o espaço, com algumas opções de destino :p',
        src: 'portfolio/6.png',
        href: 'https://space-trip.vercel.app/'
    }
]

const PortfolioSection = () => {
    return (
        <div
            id="portfolio"
            className="mt-24 lg:mt-32"
        >
            <div className="lg:flex lg:gap-12">
                <div className="">
                    <SectionTitle preTitle='portfolio' title='Últimos projetos' />
                </div>

                <div className="hidden lg:block border-[1px] border-cyan-500"></div>

                <div className="mt-2 flex-1">
                    Seja sua empresa um restaurante, uma construtora, uma agência de consultoria, start up, clínica de psicologia, nós podemos desenvolver um website bonito e eficiente que funciona sem bugs e atrasos adequado para a sua indústria.
                </div>
            </div>

            <div
                className="mt-8 flex flex-col items-center justify-center flex-wrap
                lg:flex-row lg:gap-12"
            >
                {services.map((props, index) => (
                    <Service title={props.title} text={props.text} src={props.src} href={props.href} key={index} />
                ))}
            </div>
        </div>
    )
}

export default PortfolioSection