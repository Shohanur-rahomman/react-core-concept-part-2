import { use } from "react"
import Friend from "./Friend";

export default function Friends({ friendPromise }) {
    const friends = use(friendPromise)
    console.log(friends);
    return (
        <div>
            <h2>Friends :{friends.length} </h2>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}