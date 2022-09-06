import React, {ChangeEvent, useEffect, useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import styles from './HW6.module.css'

function HW6() {
    //  const [value, setValue] = useState<string>('')

    // const save = () => {
    //     saveState<string>('editable-span-value', value)
    // }
    // const restore = () => {
    //     // setValue()
    // }

    // -------------------
    const [change, setChange] = useState(true)

    const [text, setText] = useState('Enter the text!')
    const [error, setError] = useState(false)

    const changeView = () => {
        setChange(false)
    }

    const changeText = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
        setError(false)
    }

    const changeOnBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (text) {
            setChange(true)
            console.log('hello')
        } else {
            setError(true)
        }
    }

    const saveHandler = () => {
        localStorage.setItem('editable-span-value', JSON.stringify(text))
    }
    const restoreHandler = () => {
        let restore = localStorage.getItem('editable-span-value')
        if (restore) {
            setText(JSON.parse(restore))
        }
    }


    return (

        <div>
            <hr/>
            <h3><i> homeworks 6</i></h3>

            <div>
                <br/>

                {
                    change
                        ? <span onDoubleClick={changeView}>{text}</span>
                        :
                        <input className={error ? styles.error : ''} onBlur={changeOnBlurHandler} onChange={changeText}
                               autoFocus value={text}/>

                }
                {error ? <div className={styles.error__text}>Text please</div> : ''}


                {/*<SuperEditableSpan*/}
                {/*    value={value}*/}
                {/*    onChangeText={setValue}*/}
                {/*    spanProps={{children: value ? undefined : 'enter text...'}}*/}
                {/*/>*/}

            </div>
            <br/>


            <button onClick={saveHandler}>save</button>
            <button onClick={restoreHandler}>restore</button>


            {/*<SuperButton onClick={save}>save</SuperButton>*/}
            {/*<SuperButton onClick={restore}>restore</SuperButton>*/}

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
