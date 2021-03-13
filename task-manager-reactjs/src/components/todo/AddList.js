import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fileNewList } from '../../redux/actions/appActions';
import { newList } from '../../redux/actions/listActions';

export default function({fileId}) {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name: "",
        description: ""
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

    const submitList = event => {
        event.preventDefault();
        dispatch(newList({data: data, fileId: fileId}))
        dispatch(fileNewList(null))
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