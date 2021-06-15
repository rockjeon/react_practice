import React, { useReducer } from 'react'

//reducer 로 알아보기
const initialState = { count: 0 }
function reducer(state, action) {
    switch (action.type) {
        case 'increasement':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            throw new Error()
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <h1>{state.count}</h1>
            <div className="button">
                <button onClick={() => dispatch({ type: 'increasement' })}>
                    +
                </button>
                <button onClick={() => dispatch({ type: 'decrement' })}>
                    -
                </button>
            </div>
        </>
    )
}

export default Counter
