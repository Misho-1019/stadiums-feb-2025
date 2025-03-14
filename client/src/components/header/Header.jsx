export default function Header() {
    return (
        <header>
            {/* Navigation */}
            <h1>
                <a className="home" href="/">
                    Stadiums
                </a>
            </h1>
            <nav>
                <a href="/stadiums">All Stadiums</a>
                {/* Logged-in users */}
                <div id="user">
                    <a href="/stadiums/create">Add Stadium</a>
                    <a href="/logout">Logout</a>
                </div>
                {/* Guest users */}
                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            </nav>
        </header>
    )
}