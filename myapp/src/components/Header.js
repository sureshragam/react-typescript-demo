import "./Header.css"

const Header = ({onClickContact}) =>{
    return (
        <header>
            <div>
                <img src="" alt="logo"/>
                <h1>Dmart shopping</h1>
            </div>
            <nav>
                <ul>
                    <li>Place Holder</li>
                    <li role="button">Home</li>
                    <li role="button">Shoping</li>
                    <li role="button" onClick={()=>onClickContact()}>Contact us</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header