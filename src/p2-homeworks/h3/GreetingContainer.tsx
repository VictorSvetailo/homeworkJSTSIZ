import React, {ChangeEvent, FocusEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: Array<UserType>
    userName: string
    addUserCallback: (name: string) => void
    addUserOnLine: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, userName, addUserCallback, addUserOnLine}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<boolean>(false) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        //console.log(e.currentTarget.value)
        setName(e.currentTarget.value)
        addUserCallback(e.currentTarget.value)
        setError(false)
    }


    const addUser = () => {
        if (name.trim() !== '') {
            addUserOnLine(name)
            alert(`Hello, ${userName.trim()}!`)
            setName('')// need to fix
        } else {
            setError(true)
        }
    }

    const totalUsers = users.length // need to fix

    const activateItem = (e: FocusEvent<HTMLInputElement>) => {
        console.log('Click')
        setError(false)
    }

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            activateItem={activateItem}
        />
    )
}

export default GreetingContainer
