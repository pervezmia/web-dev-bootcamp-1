import { use } from "react"

export default function Users ({fetchUsers}) {
    const styleOfCard = {
        border: "3px solid blue",
        padding: "20px",
        marginBottom: '10px',
        borderRadius: '20px'
    }
    const users = use(fetchUsers);
    console.log(users);
    return(

        <div style={styleOfCard}>
            <h3>Users: {users.length}</h3>
        </div>
    )
}