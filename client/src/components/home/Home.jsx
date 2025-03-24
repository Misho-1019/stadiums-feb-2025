import { useLatestStadiums } from "../../api/stadiumApi"

export default function Home() {
    const { latestStadiums } = useLatestStadiums()
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
                {latestStadiums.map(game => (
                    <div className="game" key={game._id}>
                        <div className="image-wrap">
                            <img src={game.imageUrl} />
                        </div>
                        <h3>{game.name}</h3>
                        <div className="rating">
                            <span>☆</span>
                            <span>☆</span>
                            <span>☆</span>
                            <span>☆</span>
                            <span>☆</span>
                        </div>
                        <div className="data-buttons">
                            <a href={`stadiums/${game._id}/details`} className="btn details-btn">
                                Details
                            </a>
                        </div>
                    </div>)
                )}

                {latestStadiums.length === 0 && <p className="no-articles">No stadiums yet</p>}

                {/* Display paragraph: If there is no games */}
                
            </div>
        </section>
    )
}