export default function CreateStadium() {
    return (
        <section id="create-page" className="auth">
            <form id="create">
                <div className="container">
                    <h1>Create Stadium</h1>
                    <label htmlFor="leg-title">Legendary Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter stadium name..." />
                    <label htmlFor="category">Area:</label>
                    <input type="text" id="area" name="area" placeholder="Enter stadium area..." />
                    <label htmlFor="levels">Capacity:</label>
                    <input type="number" id="capacity" name="capacity" min={1} placeholder={1} />
                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={""} />
                    <input className="btn submit" type="submit" defaultValue="Create Stadium" />
                </div>
            </form>
        </section>
    )
}