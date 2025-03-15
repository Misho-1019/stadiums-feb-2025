import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router"
import stadiumService from "../../services/stadiumService";

export default function DetailsStadium() {
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
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* list all comments for current game (If any) */}
                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    {/* Display paragraph: If there are no games in the database */}
                    <p className="no-comment">No comments.</p>
                </div>
                {/* Edit/Delete buttons ( Only for creator of this game ) */}
                <div className="buttons">
                    <Link to="#" className="button">
                        Edit
                    </Link>
                    <button onClick={stadiumDeleteClickHandler} className="button">
                        Delete
                    </button>
                </div>
            </div>
            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Comment......" defaultValue={""} />
                    <input className="btn submit" type="submit" defaultValue="Add Comment" />
                </form>
            </article>
        </section>
    )
}