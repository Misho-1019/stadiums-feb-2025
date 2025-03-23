import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../../context/userContext";

export default function Header() {
    const { email } = useContext(UserContext)

    return (
        <header>
            {/* Navigation */}
            <h1>
                <Link className="home" to="/">
                    Stadiums
                </Link>
            </h1>
            <nav>
                <Link to="/stadiums">All Stadiums</Link>
                {/* Logged-in users */}
                {email
                    ? (<div id="user">
                        <Link to="/stadiums/create">Add Stadium</Link>
                        <Link to="/logout">Logout</Link>
                    </div>)
                    : (<div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>)
                }
                {/* Guest users */}

            </nav>
        </header>
    )
}