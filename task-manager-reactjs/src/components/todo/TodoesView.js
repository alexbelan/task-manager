import React from 'react'
import { useSelector } from 'react-redux'
import HeaderList from './HeaderList'
import ShowTodoes from './ShowTodoes'

export default function () {
    const refList = useSelector(state => state.app.refList)

    return(
        <div className="todoes">
            <div className="new-todo">
                <HeaderList refList={refList}/>
            </div>
            <div className="todoes-list">
                <ShowTodoes/>
            </div>
        </div>
    )
}