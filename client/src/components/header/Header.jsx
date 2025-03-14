import { Link } from "react-router";

export default function Header() {
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
                <div id="user">
                    <Link to="/stadiums/create">Add Stadium</Link>
                    <Link to="/logout">Logout</Link>
                </div>
                {/* Guest users */}
                <div id="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>
    )
}