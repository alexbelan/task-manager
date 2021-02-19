import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { changeList, fileNewList } from '../../redux/actions/appActions'
import { getTodoesList } from '../../redux/actions/listActions'
import AddFile from './AddFile'
import { ShowFiles } from './showFiles'
import { ShowLists } from './showLists'

export default function Sidebar() {
    const fileData = useSelector(state => state.file)
    const dispatch = useDispatch()
    const [state, setState] = useState(1)

    const sidebar = {
        clickFile: (e) => {
            const target = e.target.className.split(' ')[0];
            const fileLists = e.currentTarget.nextElementSibling
            console.log(target)
            if (target === "add-list") {
                dispatch(fileNewList(fileLists.getAttribute('data-id')))
                let listLength = fileLists.getAttribute('data-length')
                listLength++;
                // if (listLength >= 0 && fileLists.getAttribute('data-open') === "true") {

                // }
                fileLists.style.height = 30 * listLength + "px"
                fileLists.setAttribute('data-open', true)
            } else {
                if (fileLists.getAttribute('data-open') === "false") {
                    const listLength = fileLists.getAttribute('data-length')
                    console.log(listLength)
                    if (listLength === 0) {
                        fileLists.style.height = 30 + "px"
                    } else if (listLength > 0) {
                        fileLists.style.height = (30 * listLength) + "px"
                    }
                    fileLists.setAttribute('data-open', true)
                    console.log(listLength)
                } else {
                    fileLists.style.height = 0
                    fileLists.setAttribute('data-open', false)
                }
            }
        },
        openList: (e) => {
            const list = e.currentTarget
            console.log(list)
            if (list !== undefined) {
                const listId = list.getAttribute('data-id')
                console.log(listId);
                dispatch(changeList(listId))
                dispatch(getTodoesList(listId))
            }
        }
    }

    return (
        <div className="sidebar">
            <div className="basic-todo">
                <ShowLists fileData={fileData} sidebar={sidebar}/>
            </div>
            <div className="other-todo">
                <ShowFiles fileData={fileData} sidebar={sidebar}/>
            </div>
            <AddFile/>
        </div>
    )
}