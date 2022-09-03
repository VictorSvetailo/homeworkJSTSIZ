import React, {ChangeEvent, FocusEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
    activateItem: (e: FocusEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers, activateItem}) => {
    const inputClass = error ? s.error : ''// need to fix with (?:)

    return (
        <div>
            <input autoFocus onBlur={activateItem} value={name} onChange={setNameCallback} className={inputClass}/>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            {error ? <div className={s.someClass}>Enter the text</div> : ''}
        </div>
    )
}

export default Greeting
