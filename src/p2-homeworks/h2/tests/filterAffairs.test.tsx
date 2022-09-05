import React from 'react'
import {AffairType, filterAffairs} from '../HW2'
import {v1} from 'uuid';

let initialState: AffairType[]

beforeEach(() => {
    initialState = [
        {id: v1(), name: 'React', priority: 'high'},
        {id: v1(), name: 'anime', priority: 'low'},
        {id: v1(), name: 'games', priority: 'low'},
        {id: v1(), name: 'work', priority: 'high'},
        {id: v1(), name: 'html & css', priority: 'middle'},
        {id: v1(), name: 'react', priority: 'low'},
    ]
})

test('filter by all', () => {
    const newState = filterAffairs(initialState, 'all')
    expect(newState.length).toBe(6)
})
test('filter by high', () => {
    const newState = filterAffairs(initialState, 'high')
    expect(newState.length).toBe(2)
})
test('filter by middle', () => {
    const newState = filterAffairs(initialState, 'middle')
    expect(newState.length).toBe(1)
})
test('filter by low', () => {
    const newState = filterAffairs(initialState, 'low')
    expect(newState.length).toBe(3)
})
