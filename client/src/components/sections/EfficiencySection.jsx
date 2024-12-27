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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nemo eveniet, impedit officia sit sapiente.
            </div>
        </div>
    )
}


const EfficiencySection = () => {
    return (
        <div className='bg-black/50 -mx-4 p-4 pt-8 mt-12
        lg:-mx-10 lg:p-16 lg:flex lg:flex-row-reverse lg:gap-12'
        >

            <div className="lg:w-1/2">
                <div className="flex justify-between gap-2">
                    <EfficiencyItem number='100%' text='Satisfaction Guaranteed' />
                    <EfficiencyItem number='100' text='Page Speed Scores' />
                    <EfficiencyItem number='5/5' text='Google Reviews' />
                </div>

                <div className="mt-8">
                    <img className="rounded-xl" src="performance.avif" alt="" />
                </div>
            </div>

            <div className="lg:w-1/2">

                <div className="mt-8">
                    <SectionTitle preTitle='Performance' title='Seu site com a maior performance' />

                    <p>When it comes to website load times, not very many can get the Google PageSpeed scores that we get with each and every site. Test your website load times with Google PageSpeed Insights and see what your current site is scoring right now.</p>
                    <p></p>
                </div>

                <div className="flex flex-col gap-4 mt-4">
                    <EfficiencyItem2 icon={<CgSandClock size='48' />} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nemo eveniet, impedit officia sit sapiente.'} />

                    <EfficiencyItem2 icon={<TbSeo size='48' />} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nemo eveniet, impedit officia sit sapiente.'} />

                    <EfficiencyItem2 icon={<MdDevices size='48' />} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nemo eveniet, impedit officia sit sapiente.'} />
                </div>

                <div className="flex mt-12">
                    <ContactButton />
                </div>
            </div>

        </div>
    )
}

export default EfficiencySection