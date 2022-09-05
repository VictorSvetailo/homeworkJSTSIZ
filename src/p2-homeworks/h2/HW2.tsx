import React, {useState} from 'react'
import Affairs from './Affairs'
import {v1} from 'uuid';
import {log} from 'util';

// types
//export type AffairPriorityType = any // need to fix any
export type AffairType = {
    id: string
    name: string
    priority: string
} // need to fix any
export type FilterType = 'all' | 'high' | 'middle' | 'low'

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {id: v1(), name: 'React', priority: 'high'},
    {id: v1(), name: 'anime', priority: 'low'},
    {id: v1(), name: 'games', priority: 'low'},
    {id: v1(), name: 'work', priority: 'high'},
    {id: v1(), name: 'html & css', priority: 'middle'},
    {id: v1(), name: 'react', priority: 'low'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): any => { // need to fix any
    if (filter === 'all') return affairs
    else if (filter === 'high') return affairs.filter(a => a.priority === filter)
    else if (filter === 'middle') return affairs.filter(a => a.priority === filter)
    else if (filter === 'low') return affairs.filter(a => a.priority === filter)
}
export const deleteAffair = (affairs: Array<AffairType>, id: string): Array<AffairType> => { // need to fix any
    return affairs.filter(a => a.id !== id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (id: string) => setAffairs(deleteAffair(affairs, id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
