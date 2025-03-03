import { GiCheckMark } from "react-icons/gi"
import SectionTitle from "../SectionTitle"
import ContactButton from "../ContactButton"
import ContactButtonSection from "./ContactButtonSection"

const services = [
    {
        title: '100% SEGURO',
        text: 'Websites desenvolvidos com arquitetura simples e confiável não deixando espaço para hackers se aproveitarem de suas informações.'
    },
    {
        title: '100 "PAGESPEED SCORES"',
        text: 'Sites construídos com propósito, por isso obtemos pontuações de velocidade perfeitas de 98-100/100 com o Google.'
    },
    {
        title: 'SUPORTE INIGUALÁVEL',
        text: 'Ligue ou envie uma mensagem de texto a qualquer momento sem ter que falar com robôs. Quando você me liga, fala diretamente comigo.'
    },
    {
        title: 'DESIGN CUSTOMIZADO',
        text: 'Os designs são feitos por mim mesmo ou por profissionais parceiros, o que nos permite fazer tudo o que quisermos.'
    },
    {
        title: 'GARANTIA DE DINHEIRO DE VOLTA',
        text: 'Se não puder projetar algo que você goste, você recebe seu dinheiro de volta e o contrato é cancelado. Nós defendemos nosso trabalho.'
    },
    {
        title: 'ENTENDEMOS DE SEO',
        text: 'Explicamos claramente o que é SEO, como funciona e o que posso fazer para que você obtenha uma ótima classificação.'
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
        <div
            id="services"
            className="flex flex-col items-center mx-auto mt-24
        lg:flex-row lg:items-start lg:justify-center lg:gap-12 lg:max-w-max lg:mt-32"
        >

            <div className="relative w-fit
            lg:w-1/3">
                <img className="rounded-3xl object-cover w-full contrast-150 sepia-[10%]" src="/Profile.jpg" alt="" />
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
            lg:w-1/2 lg:mt-0">
                <SectionTitle preTitle='O que nós oferecemos' title='Website a partir de R$700' />

                <div className="mt-2">Oferecemos um belo website de 5 páginas para pequenas empresas a partir de $700. Se você precisar de mais do que isso, fazemos preços personalizados com base no escopo do trabalho, número de páginas adicionais e tempo envolvido. Inclui design, desenvolvimento, hospedagem, edições, suporte 24 horas por dia, 7 dias por semana e atualizações vitalícias.</div>

                <div className="flex flex-col gap-8 mt-8 mx-auto bg-black/20 p-4
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