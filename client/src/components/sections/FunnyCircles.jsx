const FunnyCircles = () => {

    const widthAdd = 32
    const delayAdd = 100
    const circlesCount = 50

    const stylesFunc = () => {
        const styles = []
        let delay = 0
        let width = 16

        for (let i = 0; i < circlesCount; i++) {
            styles.push({
                width: `${width + widthAdd * i}px`,
                animation: 'pulse 1500ms ease-in-out',
                animationIterationCount: 'infinite',
                animationDelay: `${delay + delayAdd * i}ms`
            })
        }

        return styles
    }

    return (
        <div className="h-screen flex items-center justify-center overflow-hidden">
            <div className="relative flex items-center justify-center">
                {stylesFunc().map((style, index) => (
                    <div
                        className="absolute duration-500 aspect-square border-[1px] border-white rounded-full  transition-all"
                        style={style}
                    />
                ))
                }
            </div>
        </div>
    )
}

export default FunnyCircles