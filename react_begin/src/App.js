import React, { useRef, useState } from 'react'
import Hello from './Components/Hello'
import Counter from './Components/Counter'
import Input from './Components/Inputs'
import DataList from './Components/dataList'
import CreateData from './Components/CreatData'

function App() {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
    })
    const { username, email } = inputs
    const onChange = (e) => {
        const { name, value } = e.target
        setInputs({
            ...inputs,
            [name]: value,
        })
    }
    const [datas, setDatas] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
        },
    ])
    const nextId = useRef(4)
    const onCreate = () => {
        const data = {
            id: nextId.current,
            username,
            email,
        }
        setDatas([...datas, data])
        setInputs({
            username: '',
            email: '',
        })

        nextId.current += 1
    }
    const onRemove = (id) => {
        setDatas(datas.filter((data) => data.id !== id))
    }
    return (
        <>
            <Hello name="rockjeon" />
            <Counter />
            <Input />
            <CreateData
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <DataList datas={datas} onRemove={onRemove} />
        </>
    )
}

export default App
