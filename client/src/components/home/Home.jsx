export default function Home() {
    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>Better the stadium</h2>
                <h3>Better the Emotion</h3>
            </div>
            <img src="./images/homePic.jpeg" alt="hero" />
            <div id="home-page">
                <h1>Latest Stadiums</h1>
                {/* Display div: with information about every game (if any) */}
                <div className="game">
                    <div className="image-wrap">
                        <img src="./images/CoverFire.png" />
                    </div>
                    <h3>Cover Fire</h3>
                    <div className="rating">
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                    </div>
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">
                            Details
                        </a>
                    </div>
                </div>
                <div className="game">
                    <div className="image-wrap">
                        <img src="./images/ZombieLang.png" />
                    </div>
                    <h3>Zombie Lang</h3>
                    <div className="rating">
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                    </div>
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">
                            Details
                        </a>
                    </div>
                </div>
                <div className="game">
                    <div className="image-wrap">
                        <img src="./images/MineCraft.png" />
                    </div>
                    <h3>MineCraft</h3>
                    <div className="rating">
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                    </div>
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">
                            Details
                        </a>
                    </div>
                </div>
                {/* Display paragraph: If there is no games */}
                <p className="no-articles">No stadiums yet</p>
            </div>
        </section>
    )
}