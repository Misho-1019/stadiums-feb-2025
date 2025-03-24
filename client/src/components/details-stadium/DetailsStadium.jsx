import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router"
import CreateComment from "../create-comment/CreateComment";
import ShowComment from "../show-comment/ShowComment";
import commentService from "../../services/commentService";
import { useDeleteStadium, useStadium } from "../../api/stadiumApi";
import useAuth from "../../hooks/useAuth";

export default function DetailsStadium() {
    const [comments, setComments] = useState([])
    const { email, _id: userId } = useAuth()
    const { stadiumId } = useParams();
    const navigate = useNavigate();
    const { stadium } = useStadium(stadiumId)
    const { deleteStadium } = useDeleteStadium()


    useEffect(() => {
        commentService.getAll(stadiumId)
            .then(setComments)
    }, [stadiumId])

    const stadiumDeleteClickHandler = async () => {
        const hasConfirm = confirm(`Are you sure you want to delete ${stadium.name} stadium?`)

        if (!hasConfirm) return;

        await deleteStadium(stadiumId)

        navigate('/stadiums')
    }

    const commentCreateHandler = (newComment) => {
        setComments(state => [...state, newComment])
    }

    const isOwner = userId === stadium._ownerId

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
                <ShowComment comments={comments} />
                {/* Edit/Delete buttons ( Only for creator of this game ) */}
                {isOwner && (
                    <div className="buttons">
                        <Link to={`/stadiums/${stadiumId}/edit`} className="button">
                            Edit
                        </Link>
                        <button onClick={stadiumDeleteClickHandler} className="button">
                            Delete
                        </button>
                    </div>
                )}

            </div>
            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <CreateComment email={email} stadiumId={stadiumId} onCreate={commentCreateHandler} />
        </section>
    )
}