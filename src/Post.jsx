export default function Post({ post }) {
    console.log(post);
    const { userId,title, body } = post
    return (
        <div className="cart">
            <h2>User Id : {userId}</h2>
            <p>Title : {title}</p>
            <p>Description : {body}</p>
        </div>
    )
}