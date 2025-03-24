import { use } from "react"
import Post from "./Post"

export default function Posts({ postePromise }) {
    const posts = use(postePromise)
    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}