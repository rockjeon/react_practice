import React from 'react'

function CreateData({ username, email, onChange, onCreate }) {
    return (
        <>
            <div>
                <input
                    name="username"
                    placeholder="계정명"
                    onChange={onChange}
                    value={username}
                />
                <input
                    name="email"
                    placeholder="이메일"
                    onChange={onChange}
                    value={email}
                />
                <button onClick={onCreate}>Create</button>
            </div>
        </>
    )
}

export default CreateData
