import React from 'react'
function Data({ data, onRemove, onToggle }) {
    return (
        <>
            <div className="DataList">
                <ul>
                    <li
                        style={{
                            cursor: 'pointer',
                            color: data.active ? 'green' : 'black',
                        }}
                        onClick={() => {
                            onToggle(data.id)
                        }}
                    >
                        {data.username}
                    </li>
                    <button onClick={() => onRemove(data.id)}>삭제</button>
                </ul>
            </div>
        </>
    )
}

function DataList({ datas, onRemove, onToggle }) {
    return (
        <>
            <div>
                <h4>USERINFO</h4>
            </div>
            <div>
                {datas.map((data) => (
                    <Data
                        data={data}
                        key={data.id}
                        onRemove={onRemove}
                        onToggle={onToggle}
                    />
                ))}
            </div>
        </>
    )
}

export default DataList
