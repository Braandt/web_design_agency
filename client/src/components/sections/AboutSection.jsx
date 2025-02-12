import { FaMobile } from 'react-icons/fa'
import { GiBrazil } from 'react-icons/gi'
import { MdDevices } from 'react-icons/md'
import { BiTimer } from 'react-icons/bi'
import { SlGraph } from 'react-icons/sl'
import { SiGoogleads } from 'react-icons/si'
import Card1 from "../Card1"
import SectionTitle from '../SectionTitle'

const cards = [
    {
        icon: <FaMobile size='32px' className='text-cyan-50 group-hover:text-cyan-950' />,
        title: 'Prioridade mobile',
        text: 'Nós iniciamos a criação do site primeiro para celulares e tablets. Assegurando-nos de que o site é funcional, responsivo e otimizado para todos os dispositivos. Sem bugs ou perda de conteúdo.'
    },
    {
        icon: <MdDevices size='32px' className='text-cyan-50 group-hover:text-cyan-950' />,
        title: 'Totalmente responsivo',
        text: 'Seu website vai se encaixar perfeitamente em todos os celulares, tablets e desktops independente do tamanho da tela. Assim todos verão um site bonito e funcional.'
    },
    {
        icon: <BiTimer size='32px' className='text-cyan-50 group-hover:text-cyan-950' />,
        title: 'Carregamento otimizado',
        text: 'Se seu site leva mais que 3 segundos para aparecer na tela você pode perder até 50% do seu tráfego por que ele demora muito. Nossos sites carregam em menos de 1 segundo, assim todos que visitarem seu site terão uma boa experiência.'
    },
    {
        icon: <SlGraph size='32px' className='text-cyan-50 group-hover:text-cyan-950' />,
        title: 'Serviço de SEO',
        text: 'Especialista em SEO para negócios locais. Resultados comprovados de trafego nos nossos websites com SEO eficiente que atrai o seu público alvo.'
    },
    {
        icon: <SiGoogleads size='32px' className='text-cyan-50 group-hover:text-cyan-950' />,
        title: 'Google ppc ads',
        text: 'Nós também oferecemos criação e manutenção de anúncios Pay-Per-Click da Google. Campanhas eficazes de anúncios que atrairão seu público e maximizarão seu ROI'
    },
    {
        icon: <GiBrazil size='32px' className='text-cyan-50 group-hover:text-cyan-950' />,
        title: 'Feito no Brasil',
        text: 'Nosso time é local com todo o desenvolvimento feito no Brasil. Expertise em negócios locais com o que funciona de verdade aqui.'
    },
]

const AboutSection = () => {
    return (
        <div className="flex flex-col items-center mt-24
        lg:mt-32">

            <div className="text-center lg:max-w-4xl">
                <div className='lg:max-w-xl mx-auto'>
                    <SectionTitle preTitle='O que fazemos' title='Não se preocupe mais com o site da sua empresa' />
                </div>

                <p className="mt-8">
                    Na CWB Web Designs, somos especializados em design e desenvolvimento de sites para pequenas empresas para clientes em qualquer lugar do Brasil. Cada linha de código é escrita à mão para garantir o melhor desempenho e deixar o Google feliz, o que ajuda a atrair mais clientes para seu site e gerar mais receita para seu negócio. Também gerenciamos as edições e manutenções para você nunca ficar na mão. Nosso objetivo é criar relacionamentos de longo prazo com nossos clientes e vê-los crescer ao longo do tempo.
                </p>
            </div>

            <div className="flex flex-col mt-32 gap-20 max-w-xl
            md:grid md:grid-cols-2 md:gap-x-8 md:w-4/5 md:max-w-full
            lg:grid-cols-3 lg:w-full">

                {cards.map((props, index) => (
                    <Card1 icon={props.icon} title={props.title} text={props.text} key={index} />
                ))}

            </div>

        </div>
    )
}

export default AboutSection