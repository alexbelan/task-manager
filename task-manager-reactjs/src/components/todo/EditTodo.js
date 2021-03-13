import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addDataEditWindow, closeEditWindow } from '../../redux/actions/appActions';
import { editTodo } from '../../redux/actions/todoActions';

export default function({index}) {
    const id = useSelector(state => state.todo.findIndex(el => el.todoId === +index));
    const todo = useSelector(state => state.todo.filter(el => el.todoId === +index))[0];
    const dispatch = useDispatch();
    const [data, setData] = useState(() => {
        return {
            title: todo.title,
            description: todo.description,
            date: todo.date,
            time: todo.time,
            deysWeek: todo.deysWeek
        }
    });

    const changeInputData = event => {
        event.persist()
        if (event.target.name !== "deysWeek") {
            setData(state => {
                return {
                    ...state,
                    [event.target.name]: event.target.value,
                }
            })
        } else {
            let value = Array.from(event.target.selectedOptions, option => option.value);
            setData(state => {
                return {
                    ...state,
                    deysWeek: value
                }
            });
        }
    }

    const submitTodo = function (event) {
        event.preventDefault();
        if (data.title.split(' ').join('') === "") {
            alert("В заголовки одни пробелы")
        } else {
            dispatch(editTodo({data: data, todoId: todo.todoId, id: id}))
            dispatch(closeEditWindow())
            dispatch(addDataEditWindow({type: "", id: -1}))
        }
    }

    return (
        <form onSubmit={submitTodo}>
            <div>
                <input name="title" type="text" value={data.title} onChange={changeInputData}/>
            </div>
            <div>
                <textarea id="descriptionList" name="description" value={data.description} onChange={changeInputData}>

                </textarea>
            </div>
            <div>
                <input name="date" type="date" value={data.date} onChange={changeInputData}/>
            </div>
            <div>
                <input name="time" type="time" value={data.time} onChange={changeInputData} />
            </div>
            <div>
            <select name="deysWeek" value={data.deysWeek} onChange={changeInputData} multiple>
                <option value="-1" >No</option>
                <option value="1">Monday</option>
                <option value="2">Tuesdey</option>
                <option value="3">Wednesday</option>
                <option value="4">Thursday</option>
                <option value="5">Friday</option>
                <option value="6">Saturday</option>
                <option value="0">Sunday</option>
            </select>
            </div>
            <input type="submit"/>
        </form>
    )
}