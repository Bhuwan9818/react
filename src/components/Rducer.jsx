import { useReducer } from "react"
import style from './Reducer.module.css'

const reducer = (state, action) => {
    if (action.type === 'ADD') {
        return state + 1
    } else if (action.type === 'SUB') {
        return state - 1
    } else {
        return state
    }
}

function Reducer() {
    const [state, dispatch] = useReducer(reducer, 0)
    return (
        <div className={style.reducer}>
            <div className={style.container}>
                <h1>{state}</h1>
                <div className={style.button}>
                    <button onClick={() => dispatch({ type: 'ADD' })}>Add</button>
                    <button onClick={() => dispatch({ type: 'SUB' })}>delete</button>
                </div>
            </div>
        </div>
    )
}

export default Reducer
