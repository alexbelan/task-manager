import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteFile } from '../../redux/actions/fileActions';
import { addDataEditWindow, closeEditWindow } from '../../redux/actions/appActions';
import { deleteTodoOnFrontend } from '../../redux/actions/todoActions';

export default function({index}) {
    const id = useSelector(state => state.file.findIndex(el => el.fileId === +index));
    const file = useSelector(state => state.file.filter(el => el.fileId === +index))[0];
    const lists = useSelector(state => state.list.filter(el => el.file === +index))
    const todoes = useSelector(state => state.todo);
    const dispatch = useDispatch();

    const deleteTodoes = listId => {
        const todoesList = todoes.filter(el => el.list === listId);
        if (todoesList.length !== 0) {
            for (let i = 0; i < todoesList.length; ++i) {
                const todoId = todoes.findIndex(el => el.todoId === todoesList[i])
                dispatch(deleteTodoOnFrontend(todoId))
            }
        }
    }

    const submitDeleteFile = event => {
        const dataBtn = event.target.getAttribute('data');
        if (dataBtn === "yes") {
            for(let i = 0; i < lists.length; i++) {
                deleteTodoes(lists[i].listId)
            }
            dispatch(deleteFile({id: id, fileId: file.fileId, deleteLists: true}))
        } else if (dataBtn === "no") {
            dispatch(deleteFile({id: id, fileId: file.fileId, deleteLists: false}))
        }
        dispatch(closeEditWindow())
        dispatch(addDataEditWindow({type: "", id: -1}))
    }

    return (
        <>
            <p>Do you want to delete todo lists or move lists to "Other Lists"</p>
            <div>
                <button onClick={submitDeleteFile} data="yes">Yes</button>
                <button onClick={submitDeleteFile} data="no">No</button>
            </div>
        </>
    )
}