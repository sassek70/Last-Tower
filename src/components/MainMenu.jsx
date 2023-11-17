import { NavLink, Link } from "react-router-dom";


const MainMenu = () => {


    return (
        <div className="menu-button-container">
            <div>
                <button className="menu-button">
                    <NavLink to='/gameboard'>
                        CONTINUE
                    </NavLink>
                </button>
            </div>
            <div>
                <button className="menu-button">
                    NEW GAME
                </button>
            </div>
            <div>
                <button className="menu-button">
                    PROFILE
                </button>
            </div>
            <div>
                <button className="menu-button">
                    SETTINGS
                </button>
            </div>
            <div>
                <button className="menu-button">
                    QUIT
                </button>
            </div>
        </div>
    )
}

export default MainMenu