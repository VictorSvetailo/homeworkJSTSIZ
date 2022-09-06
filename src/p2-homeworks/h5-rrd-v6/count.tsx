import React, {useEffect, useState} from 'react';

export const Count = () => {

    const [value, setValue] = useState(0)

    useEffect(()=>{
        let valueAsString = localStorage.getItem('counterValue')
            if (valueAsString) {
                setValue(JSON.parse(valueAsString))
            }
    },[])

    useEffect(()=>{
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value])


    const plusValue = () => {
        setValue(value + 1)
    }


    // const setToLocalStorageHandler = () => {
    //     localStorage.setItem('counterValue', JSON.stringify(value))
    //     // localStorage.setItem('counterValue + 1', JSON.stringify(value + 1))
    // }

    // const clearLocalStorageHandler = () => {
    //     localStorage.clear()
    //     setValue(0)
    // }
    // const removeLocalStorageHandler = () => {
    //     localStorage.removeItem('counterValue + 1')
    // }
    // const getFromLocalStorageHandler = () => {
    //     let valueAsString = localStorage.getItem('counterValue')
    //     if (valueAsString) {
    //         setValue(JSON.parse(valueAsString))
    //     }
    // }

    return (
        <div>
            <h1>Local Storage</h1>

            <h2>{value}</h2>
            <button onClick={plusValue}>+</button>
            {/*<button onClick={setToLocalStorageHandler}>Set To Local Storage</button>*/}
            {/*<div>-</div>*/}
            {/*<button onClick={getFromLocalStorageHandler}>Get From Local Storage</button>*/}
            {/*<div>-</div>*/}
            {/*<button onClick={clearLocalStorageHandler}>Clear Local Storage</button>*/}
            {/*<div>-</div>*/}
            {/*<button onClick={removeLocalStorageHandler}>Remove Local Storage</button>*/}
        </div>
    );
}