import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from 'uuid';

// types
export type UserType = {
    id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])
    const [userName, setUsersName] = useState<string>('')
    const addUserCallback = (name: string) => { // need to fix any
       setUsersName(name)
    }

    const addUserOnLine = (name: string) => {
        const addUser = {id: v1(), name: name}
        setUsers([addUser,...users])
    }

    const allUsers = users.map(u => {
        return <div key={u.id}>{u.name}</div>
    })

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserOnLine={addUserOnLine} userName={userName} addUserCallback={addUserCallback}/>

            <hr/>
            {allUsers}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
