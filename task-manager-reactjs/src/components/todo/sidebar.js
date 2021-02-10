import React from 'react'
import { useSelector } from "react-redux"
import { ShowFiles } from './showFiles'
import { ShowLists } from './showLists'

export default function Sidebar() {
    const fileData = useSelector(state => state.todo.fileData)
    return (
        <div class="sidebar">
            <div className="basic-todo">
                <ShowLists fileData={fileData}/>
            </div>
            <div className="other-todo">
                <ShowFiles fileData={fileData}/>
            </div>
        </div>
    )
}