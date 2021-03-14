import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addDataEditWindow, changeList, fileNewList, openEditWindow } from '../../redux/actions/appActions'
import { deleteList, getTodoesList } from '../../redux/actions/listActions'
import { deleteTodo, deleteTodoOnFrontend } from '../../redux/actions/todoActions'
import AddFile from './AddFile'
import { ShowFiles } from './showFiles'
import { ShowLists } from './showLists'
import ShowToday from './ShowToday'

export default function Sidebar() {
    const files = useSelector(state => state.file);
    const lists = useSelector(state => state.list);
    const todoes = useSelector(state => state.todo);
    const refList = useSelector(state => state.app.refList);
    const dispatch = useDispatch()

    const deleteTodoes = (listId) => {
        const todoesList = lists[listId].todo;
        if (todoesList.length !== 0) {
            for (let i = 0; i < todoesList.length; ++i) {
                const id = todoes.findIndex(el => el.todoId === todoesList[i])
                dispatch(deleteTodoOnFrontend(id))
            }
        }
    }

    const sidebar = {
        clickFile: (e) => {
            const target = e.target.className.split(' ')[0];
            const fileLists = e.currentTarget.nextElementSibling
            if (target === "add-list") {
                dispatch(addDataEditWindow({type: "addList", id: fileLists.getAttribute('data-id')}))
                dispatch(openEditWindow())
                // let listLength = fileLists.getAttribute('data-length')
                // listLength++;
                // fileLists.style.height = 30 * listLength + "px"
                // fileLists.setAttribute('data-open', true)
            } else if (target === "edit-file") {
                const fileId = fileLists.getAttribute('data-id')
                dispatch(addDataEditWindow({type: "file", id: fileId}))
                dispatch(openEditWindow())
            } else if (target === "delete-file") {
                const fileId = fileLists.getAttribute('data-id')
                dispatch(addDataEditWindow({type: "deleteFile", id: fileId}))
                dispatch(openEditWindow())
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
            } else if (target.className.split(' ')[0] === 'delete-list') {
                const listId = list.getAttribute('data-id')
                const id = lists.findIndex(el => el.listId === +listId)
                if (refList === listId) {
                    dispatch(changeList(-1))
                }
                deleteTodoes(id);
                dispatch(deleteList({id: id, listId: listId}))
            } else {
                if (list !== undefined) {
                    const listId = list.getAttribute('data-id')
                    dispatch(changeList(+listId))
                }
            }
        }
    }

    return (
        <div className="sidebar">
            <div className="today-todo">
                <ShowToday/>
            </div>
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