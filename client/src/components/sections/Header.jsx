const Header = () => {
    return (
        <div className="fixed left-0 right-0 mx-4 flex justify-between items-center rounded-lg px-3 h-16 bg-cyan-950/60 border-[1px] border-white/10 backdrop-blur-lg font-sans-3 tracking-wider z-50
        lg:px-6 lg:rounded-xl lg:h-20 lg:mx-8">

            <div>
                CWB Web Design
            </div>

            <div
                className="flex flex-col justify-between py-[10px] px-2 aspect-square h-9 rounded-lg bg-cyan-50
                md:hidden"
            >
                <div className="border-[1px] rounded-full border-cyan-950" />
                <div className="border-[1px] rounded-full border-cyan-950" />
                <div className="border-[1px] rounded-full border-cyan-950" />
            </div>

            <div
                className="hidden gap-12 items-center
                md:flex"
            >
                <a href="/">Home</a>
                <a href="/">Serviços</a>
                <a href="/">Portfolio</a>

                <button className="bg-cyan-50 text-cyan-950 uppercase py-1 px-3 rounded-full">Entrar em contato</button>

            </div>

        </div>
    )
}

export default Header