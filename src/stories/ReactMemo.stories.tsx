import React, {useState} from "react";

export default {
    title: "ReactMemoDemo"
}

const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: string[] }) => {
    console.log("USERS")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret);


export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Vadim", "Lilia"])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>
    </>
}



