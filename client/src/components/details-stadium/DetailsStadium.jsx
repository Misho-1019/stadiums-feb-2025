import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router"
import stadiumService from "../../services/stadiumService";
import CreateComment from "../create-comment/CreateComment";
import ShowComment from "../show-comment/ShowComment";

export default function DetailsStadium({
    email,
}) {
    const [stadium, setStadium] = useState({})
    const { stadiumId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        stadiumService.getOne(stadiumId)
            .then(setStadium)
    }, [stadiumId])

    const stadiumDeleteClickHandler = async () => {
        const hasConfirm = confirm(`Are you sure you want to delete ${stadium.name} stadium?`)

        if (!hasConfirm) return;

        await stadiumService.delete(stadiumId)

        navigate('/stadiums')
    }

    return (
        <section id="game-details">
            <h1>Stadium Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={stadium.imageUrl} />
                    <h1>{stadium.name}</h1>
                    <span className="levels">Capacity: {stadium.capacity}</span>
                    <p className="type">{stadium.area}</p>
                </div>
                <p className="text">
                    {stadium.summary}
                </p>
                {/* Bonus ( for Guests and Users ) */}
                <ShowComment />
                {/* Edit/Delete buttons ( Only for creator of this game ) */}
                <div className="buttons">
                    <Link to={`/stadiums/${stadiumId}/edit`} className="button">
                        Edit
                    </Link>
                    <button onClick={stadiumDeleteClickHandler} className="button">
                        Delete
                    </button>
                </div>
            </div>
            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <CreateComment email={email} stadiumId={stadiumId} />
        </section>
    )
}