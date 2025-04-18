import { Link } from "react-router";

export default function ItemCatalogStadium({
    _id,
    name,
    area,
    imageUrl,
}) {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={imageUrl} />
                <h6>{area}</h6>
                <h2>{name}</h2>
                <Link to={`/stadiums/${_id}/details`} className="details-button">
                    Details
                </Link>
            </div>
        </div>
    )
}