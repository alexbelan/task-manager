import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addDataEditWindow, changeList, fileNewList, openEditWindow } from '../../redux/actions/appActions'
import { deleteList, getTodoesList } from '../../redux/actions/listActions'
import { deleteTodo, deleteTodoOnFrontend } from '../../redux/actions/todoActions'
import AddFile from './AddFile'
import HeaderSidebar from './HeaderSidebar'
import { ShowFiles } from './showFiles'
import { ShowLists } from './showLists'
import ShowReady from './ShowReady'
import ShowToday from './ShowToday'

export default function Sidebar() {
    const files = useSelector(state => state.file);
    const lists = useSelector(state => state.list);
    const todoes = useSelector(state => state.todo);
    const refList = useSelector(state => state.app.refList);
    const dispatch = useDispatch()
    const [lengthFile, setLengthFile] = useState(0);

    const deleteTodoes = (listId) => {
        const todoesList = lists[listId].todo;
        if (todoesList.length !== 0) {
            for (let i = 0; i < todoesList.length; ++i) {
                const id = todoes.findIndex(el => el.todoId === todoesList[i])
                dispatch(deleteTodoOnFrontend(id))
            }
        }
    }

    const renderFile = (size, file) => {
        console.log(size + " " + file)
        if (size === 0) {
            file.style.height = 34 + 2 + "px"
        } else if (size > 0) {
            file.style.height = (34 * size) + 2 + "px"
        }
        file.style.cssText += "margin: 0 0 20px 30px";
    }

    const sidebar = {
        clickFile: (e) => {
            const target = e.target.className.split(' ')[0];
            const fileLists = e.currentTarget.nextElementSibling
            if (target === "add-list") {
                dispatch(addDataEditWindow({type: "addList", id: fileLists.getAttribute('data-id')}))
                dispatch(openEditWindow())
                // const listLength = fileLists.getAttribute('data-length')
                // renderFile(listLength, )
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
                    renderFile(listLength, fileLists)
                    fileLists.setAttribute('data-open', true)
                } else {
                    fileLists.style.height = 0
                    fileLists.style.cssText += "margin: 0 0 0 30px";
                    fileLists.setAttribute('data-open', false)
                }
            }
        },
        openList: (e) => {
            const list = e.currentTarget
            const target = e.target
            const filePerent = list.parentNode;
            if (target.className.split(' ')[0] === 'edit-list') {
                const listId = list.getAttribute('data-id')
                dispatch(addDataEditWindow({type: "list", id: listId}))
                dispatch(openEditWindow())
            } else if (target.className.split(' ')[0] === 'delete-list') {
                const listId = list.getAttribute('data-id')
                const id = lists.findIndex(el => el.listId === +listId)
                const sizeFile = +filePerent.getAttribute('data-length')
                filePerent.setAttribute('data-length', sizeFile - 1)
                renderFile(sizeFile - 1, filePerent)
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
            <HeaderSidebar/>
            <div className="today-todo">
                <ShowToday/>
            </div>
            <div className="check-todo">
                <ShowReady/>
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