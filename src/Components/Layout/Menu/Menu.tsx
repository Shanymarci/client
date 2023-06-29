import "./Menu.css";

import { Link } from "react-router-dom";

function Menu(): JSX.Element {
    return (
        <div className = "Menu">
			<Link to="about">About</Link>
            <Link to="Signup">Signup</Link>
            <Link to="signin">Sign In</Link>
            <Link to="search">Search</Link>
        </div>
    );
}

export default Menu;