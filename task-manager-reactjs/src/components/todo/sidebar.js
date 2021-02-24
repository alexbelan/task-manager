import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addDataEditWindow, changeList, fileNewList, openEditWindow } from '../../redux/actions/appActions'
import { getTodoesList } from '../../redux/actions/listActions'
import AddFile from './AddFile'
import { ShowFiles } from './showFiles'
import { ShowLists } from './showLists'

export default function Sidebar() {
    const files = useSelector(state => state.file)
    const lists = useSelector(state => state.list)
    const dispatch = useDispatch()

    const sidebar = {
        clickFile: (e) => {
            const target = e.target.className.split(' ')[0];
            const fileLists = e.currentTarget.nextElementSibling
            if (target === "add-list") {
                dispatch(fileNewList(fileLists.getAttribute('data-id')))
                let listLength = fileLists.getAttribute('data-length')
                listLength++;
                fileLists.style.height = 30 * listLength + "px"
                fileLists.setAttribute('data-open', true)
            } else {
                if (fileLists.getAttribute('data-open') === "false") {
                    const listLength = fileLists.getAttribute('data-length')
                    if (listLength === 0) {
                        fileLists.style.height = 30 + "px"
                    } else if (listLength > 0) {
                        fileLists.style.height = (30 * listLength) + "px"
                    }
                    fileLists.setAttribute('data-open', true)
                } else {
                    fileLists.style.height = 0
                    fileLists.setAttribute('data-open', false)
                }
            }
        },
        openList: (e) => {
            const list = e.currentTarget
            const target = e.target
            if (target.className.split(' ')[0] === 'edit-list') {
                const listId = list.getAttribute('data-id')
                dispatch(addDataEditWindow({type: "list", id: listId}))
                dispatch(openEditWindow())
            } else {
                if (list !== undefined) {
                    const listId = list.getAttribute('data-id')
                    dispatch(changeList(listId))
                }
            }
        }
    }

    return (
        <div className="sidebar">
            <div className="basic-todo">
                <ShowLists lists={lists} sidebar={sidebar}/>
            </div>
            <div className="other-todo">
                <ShowFiles fileData={files} lists={lists} sidebar={sidebar}/>
            </div>
            <AddFile/>
        </div>
    )
}