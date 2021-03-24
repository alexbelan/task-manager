import React from 'react'
import { useSelector } from 'react-redux'
import BtnAddTodo from './BtnAddTodo'
import HeaderList from './HeaderList'
import ShowTodoes from './ShowTodoes'

export default function () {
    const refList = useSelector(state => state.app.refList)

    return(
        <div className="todoes">
            <div className="header-list">
                <HeaderList refList={refList}/>
            </div>
            {Number.isInteger(refList) && refList > -1 &&
                <div className="actions"> 
                    <BtnAddTodo listId={refList} />
                </div>
            }
            <div className="todoes-list">
                <ShowTodoes/>
            </div>
        </div>
    )
}