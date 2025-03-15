import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import stadiumService from "../../services/stadiumService";

export default function EditStadium() {
    const [stadium, setStadium] = useState({})
    const { stadiumId } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        stadiumService.getOne(stadiumId)
            .then(setStadium)
    }, [stadiumId])

    const formAction = async (formData) => {
        const stadiumData = Object.fromEntries(formData);

        await stadiumService.edit(stadiumId, stadiumData)

        navigate(`/stadiums/${stadiumId}/details`)
    }

    return (
        <section id="edit-page" className="auth">
            <form id="edit" action={formAction}>
                <div className="container">
                    <h1>Edit Stadium</h1>
                    <label htmlFor="leg-title">Legendary Name:</label>
                    <input type="text" id="name" name="name" defaultValue={stadium.name} />
                    <label htmlFor="category">Area:</label>
                    <input type="text" id="area" name="area" defaultValue={stadium.area} />
                    <label htmlFor="levels">Capacity:</label>
                    <input type="number" id="capacity" name="capacity" min={1} defaultValue={stadium.capacity} />
                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={stadium.imageUrl} />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={stadium.summary} />
                    <input className="btn submit" type="submit" defaultValue="Edit Stadium" />
                </div>
            </form>
        </section>
    )
}