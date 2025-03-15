import commentService from "../../services/commentService"

export default function CreateComment({ 
    email,
    stadiumId,
    onCreate,
}) {
    const commentAction = async (formData) => {
        const comment = formData.get('comment')

        const createComment = await commentService.create(email, stadiumId, comment)
        
        onCreate(createComment);
        
    }
    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" action={commentAction}>
                <textarea name="comment" placeholder="Comment......" defaultValue={""} />
                <input className="btn submit" type="submit" defaultValue="Add Comment" />
            </form>
        </article>
    )
}