import "./Header.css"

const Header = ({onClickContact}) =>{
    return (
        <header>
            <div>
                <img src="" alt="logo"/>
                <h1>Dmart</h1>
            </div>
            <nav>
                <ul>
                    <li role="button">Home</li>
                    <li role="button">Shoping</li>
                    <li role="button" onClick={()=>onClickContact()}>Contact us</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header