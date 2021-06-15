import React from 'react'
function Data({ data, onRemove }) {
    return (
        <>
            <div className="DataList">
                <ul>
                    <li>{data.username}</li>
                    <button onClick={() => onRemove(data.id)}>삭제</button>
                </ul>
            </div>
        </>
    )
}

function DataList({ datas, onRemove }) {
    return (
        <>
            <div>
                <h4>USERINFO</h4>
            </div>
            <div>
                {datas.map((data) => (
                    <Data data={data} key={data.id} onRemove={onRemove} />
                ))}
            </div>
        </>
    )
}

export default DataList
