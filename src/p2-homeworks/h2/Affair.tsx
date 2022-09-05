import Reac, {MouseEvent} from 'react'
import {AffairType} from './HW2';

type AffairPropsType = {
    // key не нужно типизировать
    affair: string // need to fix any
    deleteAffairCallback: (id: string) => void // need to fix any
    priority: string
    id: string
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (e: MouseEvent<HTMLButtonElement>) => props.deleteAffairCallback(props.id) // need to fix
    return (
        <div>
            <span key={props.id} >{props.affair} <b>{props.priority}</b> </span>

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
