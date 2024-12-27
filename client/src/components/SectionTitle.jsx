const SectionTitle = ({ preTitle, title }) => {
    return (
        <div className="uppercase font-sans-3">
            <div className="tracking-widest text-cyan-500">{preTitle}</div>
            <div className="text-4xl lg:text-6xl mt-2">{title}</div>
        </div>
    )
}

export default SectionTitle