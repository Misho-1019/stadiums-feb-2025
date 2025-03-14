export default function EditStadium() {
    return (
        <section id="edit-page" className="auth">
            <form id="edit">
                <div className="container">
                    <h1>Edit Stadium</h1>
                    <label htmlFor="leg-title">Legendary Name:</label>
                    <input type="text" id="name" name="name" defaultValue="" />
                    <label htmlFor="category">Area:</label>
                    <input type="text" id="area" name="area" defaultValue="" />
                    <label htmlFor="levels">Capacity:</label>
                    <input type="number" id="capacity" name="capacity" min={1} defaultValue="" />
                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue="" />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={""} />
                    <input className="btn submit" type="submit" defaultValue="Edit Stadium" />
                </div>
            </form>
        </section>
    )
}