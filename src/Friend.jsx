import './App.css'

export default function Friend({ friend }) {
    const {name,email,phone } = friend;
    
    return (
        <div className="cart">
            <h2>name : {name}</h2>
            <p>email : {email }</p>
            <p>phone: {phone}</p>
        </div>
    )
}