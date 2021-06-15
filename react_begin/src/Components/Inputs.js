import React, { useState, useRef } from 'react'

function Input() {
    // useState 설정하기
    const [inputs, setInputs] = useState({
        id: '',
        email: '',
    })
    const idInput = useRef()

    const { id, email } = inputs
    //e.target => value 갖고 오기
    const onChange = (e) => {
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value,
        })
    }

    const onReset = () => {
        setInputs({
            id: '',
            email: '',
        })
        idInput.current.focus()
    }
    return (
        <>
            <div className="inputs">
                <label>
                    id:
                    <input
                        className="id"
                        name="id"
                        onChange={onChange}
                        value={id}
                        ref={idInput}
                    />
                </label>
                <label>
                    email:
                    <input
                        className="email"
                        name="email"
                        onChange={onChange}
                        value={email}
                    />
                </label>
                <button className="reset" onClick={onReset}>
                    reset
                </button>
            </div>
            <div className="result">
                <h3>id:{id}</h3>
                <h4>email:{email}</h4>
            </div>
        </>
    )
}

export default Input
