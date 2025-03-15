import { useEffect, useState } from "react"
import stadiumService from "../../services/stadiumService"

export default function CatalogStadium() {
    const [stadiums, setStadiums] = useState([])
    useEffect(() => {
        stadiumService.getAll()
           .then(setStadiums)
    }, [])
    
    return (
        <section id="catalog-page">
            <h1>All Stadiums</h1>
            {/* Display div: with information about every game (if any) */}
            <div className="allGames">
                <div className="allGames-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Cover Fire</h2>
                    <a href="#" className="details-button">
                        Details
                    </a>
                </div>
            </div>
            <div className="allGames">
                <div className="allGames-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Zombie lang</h2>
                    <a href="#" className="details-button">
                        Details
                    </a>
                </div>
            </div>
            <div className="allGames">
                <div className="allGames-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>MineCraft</h2>
                    <a href="#" className="details-button">
                        Details
                    </a>
                </div>
            </div>
            {/* Display paragraph: If there is no games */}
            <h3 className="no-articles">No stadiums yet</h3>
        </section>
    )
}