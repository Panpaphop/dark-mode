import light from '../image/light.svg'
import dark from '../image/dark.svg'


const Content = () => {
    return (
        <main>
            <div>
                <h1>Ryu Panpapahop</h1>
                <p>DarkMode Workshop</p>
            </div>
            <img src={light} alt="logo" />
            <img src={dark} alt="logo" />
        </main>
    )
}

export default Content;