import { FaCheck } from "react-icons/fa"
import SectionTitle from "../SectionTitle"
import { BiBlock } from "react-icons/bi"
import ContactButton from "../ContactButton"

const options = [
    {
        name: 'Básico',
        items: [
            'Design e desenvolvimento',
            'R$20/mês para o hospedagem',
            'R$100 a cada página além das 5 principais',
            '+ R$250 para adicionar um blog',
            'Edições ilimitadas',
            'Suporte 24/7'
        ],
        price: '$800'
    },
    {
        name: 'Ecommerce / Blog',
        items: [
            'Design and development',
            'R$20/mês para o hospedagem',
            'R$100 a cada página além das 5 principais',
            'Totalmente editável pelo cliente sem programação',
            'Loja Shopify customizada',
            'Entrega integrada',
            'Suporte 24/7',
        ],
        price: '$1200',
        highlight: true
    }
    // {
    //     name: 'ecommerce',
    //     items: [
    //         'Design and development',
    //         '$25/mo hosting',
    //         '$100 fee per page after 5',
    //         '$25/mo hosting',
    //         'Design and development',
    //         '$25/mo hosting',
    //         '$100 fee per page after 5',
    //     ],
    //     price: '$8000'
    // },
]

const Option = ({ name, items, price, highlight = false }) => {
    return (
        <div className="relative bg-black/60 rounded-3xl mt-4 p-8 flex-1">
            {highlight && <>
                <div className="absolute w-full h-full border-[1px] border-cyan-50 top-0 left-0 rounded-3xl" />
                <div className="absolute w-full h-full border-[1px] border-cyan-200 blur top-0 left-0 rounded-3xl" />
                <div className="absolute w-full h-full border-[1px] border-cyan-200 blur top-0 left-0 rounded-3xl" />
                <div className="absolute w-full h-full border-[1px] border-cyan-200 blur top-0 left-0 rounded-3xl" />
            </>}
            <p className="uppercase font-sans-3 text-4xl">{name}</p>

            {items.map((item, index) => (
                <div key={index} className="flex gap-24 justify-between mt-3">
                    <p>{item}</p>
                    <FaCheck />
                </div>
            ))}

            <div className="mt-8 font-sans-3 text-5xl">{price} <span className="font-sans-1 text-base">+R$25/mês hospedagem</span></div>

            <div className="mt-8">
                <ContactButton text='saber mais' />
            </div>
        </div>
    )
}

const PricesSection = () => {
    return (
        <div
            className="mt-24 lg:mt-32"
        >
            <div className="max-w-xl">
                <SectionTitle title='Opções de preços de acordo com o projeto' preTitle='Nossos preços' />
            </div>

            <div
                className="flex flex-col gap-4 mt-4 items-center
                lg:flex-row"
            >
                {options.map((props, index) => (
                    <Option name={props.name} items={props.items} price={props.price} highlight={props.highlight} key={index} />
                ))}
            </div>

        </div>
    )
}

export default PricesSection