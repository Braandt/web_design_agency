import SectionTitle from "../SectionTitle"
import ContactButton from "../ContactButton"
import { CgSandClock } from 'react-icons/cg'
import { TbSeo } from 'react-icons/tb'
import { MdDevices } from 'react-icons/md'

const EfficiencyItem = ({ number, text }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="text-4xl text-cyan-500 font-sans-3
            lg:text-6xl">
                {number}
            </div>
            <div>
                {text}
            </div>
        </div>
    )
}

const EfficiencyItem2 = ({ icon, text }) => {
    return (
        <div className="flex gap-8 items-center">
            <div className="relative">
                <div className="absolute blur-sm opacity-80">
                    {icon}
                </div>
                <div className="">
                    {icon}
                </div>
            </div>

            <div>
                {text}
            </div>
        </div>
    )
}


const EfficiencySection = () => {
    return (
        <div className='bg-black/50 -mx-4 p-4 pt-8 mt-24
        lg:-mx-10 lg:p-16 lg:flex lg:flex-row-reverse lg:gap-12 lg:mt-32'
        >

            <div className="lg:w-1/2">
                <div className="flex justify-between gap-2">
                    <EfficiencyItem number='100%' text='Satisfação Garantida' />
                    <EfficiencyItem number='100' text='Page Speed Scores' />
                    <EfficiencyItem number='5/5' text='Revies do 
                    Google' />
                </div>

                <div className="mt-8">
                    <img className="rounded-xl" src="performance.png" alt="" />
                </div>
            </div>

            <div className="lg:w-1/2">

                <div className="mt-8">
                    <SectionTitle preTitle='Performance' title='Seu site com a maior performance' />

                    <p>Quando se trata de tempos de carregamento de sites, poucos conseguem obter as pontuações do Google PageSpeed ​​que obtemos com cada site. Teste os tempos de carregamento do seu site com o Google PageSpeed ​​Insights e veja qual é a pontuação do seu site atual agora.</p>
                </div>

                <div className="flex flex-col gap-4 mt-4">

                    <EfficiencyItem2 icon={<CgSandClock size='48' />} text={'Menores tempos de carregamento significam mais tráfego e mais conversões de site ao longo do tempo.'} />

                    <EfficiencyItem2 icon={<TbSeo size='48' />} text={'Sites mais rápidos podem ajudar a melhorar o SEO e o desempenho dos seus anúncios do Google.'} />

                    <EfficiencyItem2 icon={<MdDevices size='48' />} text={'Nossos sites carregam instantaneamente em menos de 1 segundo ou menos, o que leva a uma melhor experiência do usuário e conversões.'} />

                </div>

                <div className="flex mt-12">
                    <ContactButton />
                </div>
            </div>

        </div>
    )
}

export default EfficiencySection