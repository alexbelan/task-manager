import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addDataEditWindow, closeEditWindow } from '../../redux/actions/appActions';
import { editList } from '../../redux/actions/listActions';

export default function({index}) {
    const id = useSelector(state => state.list.findIndex(el => el.listId === +index));
    const list = useSelector(state => state.list.filter(el => el.listId === +index))[0];
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name: list.name,
        description: list.description,
    });

    const changeInputData = event => {
        event.persist()
        setData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    const submitList = function (event) {
        event.preventDefault();
        if (data.name.split(' ').join('') === "") {
            alert("В заголовки одни пробелы")
        } else {
            dispatch(editList({data: data, listId: list.listId, id: id}))
            dispatch(closeEditWindow())
            dispatch(addDataEditWindow({type: "", id: -1}))
        }
    }

    return (
        <form onSubmit={submitList}>
            <div>
            <label for="nameList">
                <h5>Name:</h5>
            </label>
            <input id="nameList" type="text" name="name" value={data.name} onChange={changeInputData} />
            </div>
            <div>
            <label for="descriptionList">
                <h5>Description:</h5>
            </label>
            <textarea id="descriptionList" name="description" value={data.description} onChange={changeInputData}>

            </textarea>
            </div>
            <input type="submit"/>
        </form>
    )
}