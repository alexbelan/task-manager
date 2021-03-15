import React from 'react';
import editIcon from '../../img/edit.svg';
import trashIcon from '../../img/trash.svg';
import moment from 'moment';

export default function ({todoes, readyTodoClick}) {
    const parseTime = timeString => moment(timeString, 'HH:mm')

    const today = moment().format('YYYY-MM-DD').valueOf();
    const todayDate = moment(today, 'YYYY-MM-DD').valueOf();

    let listTodoes = todoes.filter(todo => moment(todo.date, 'YYYY-MM-DD').valueOf() == todayDate)
    listTodoes.sort((a, b) => parseTime(a.time) > parseTime(b.time) ? 1 : -1);

    if (listTodoes.length !== 0) {
        let listCurrentTime = listTodoes.map((item, index) => {
            if (item.ready === false && item.time !== "") {
                return (
                <div 
                    className="todo"
                    data-ready={item.ready} 
                    data-index={index} 
                    data-todoid={item.todoId} 
                    key={item.todoId} 
                    onClick={readyTodoClick}>
                        <div>
                            <input type="checkbox" id={"todo" + item.todoId}/>
                            <label for={"todo" + item.todoId}>{item.title}</label>
                        </div>
                        <div className="control">
                            <div className="edit-todo">
                                <img className="edit-todo" src={editIcon} />
                            </div>
                            <div className="delete-todo">
                                <img className="delete-todo" src={trashIcon} />
                            </div>
                        </div>
                </div>)
            }   
        })
        let listNotCurrentTime = listTodoes.map((item, index) => {
            if (item.ready === false && item.time === "") {
                return (
                <div 
                    className="todo"
                    data-ready={item.ready} 
                    data-index={index} 
                    data-todoid={item.todoId} 
                    key={item.todoId} 
                    onClick={readyTodoClick}>
                        <div>
                            <input type="checkbox" id={"todo" + item.todoId}/>
                            <label for={"todo" + item.todoId}>{item.title}</label>
                        </div>
                        <div className="control">
                            <div className="edit-todo">
                                <img className="edit-todo" src={editIcon} />
                            </div>
                            <div className="delete-todo">
                                <img className="delete-todo" src={trashIcon} />
                            </div>
                        </div>
                </div>)
            }   
        })
        let listReady = listTodoes.map((item, index) => {
            if (item.ready === true) {
                return (
                <div 
                    className="todo"
                    data-ready={item.ready} 
                    data-index={index} 
                    data-todoid={item.todoId} 
                    key={item.todoId} 
                    onClick={readyTodoClick}>
                        <div>
                            <input type="checkbox" id={"todo" + item.todoId} checked/>
                            <label for={"todo" + item.todoId}>{item.title}</label>
                        </div>
                        <div className="control">
                            <div className="edit-todo">
                                <img className="edit-todo" src={editIcon} />
                            </div>
                            <div className="delete-todo">
                                <img className="delete-todo" src={trashIcon} />
                            </div>
                        </div>
                </div>)
            }   
        })
        return (
            <>
                {listCurrentTime}
                <h4>Other tasks:</h4>
                {listNotCurrentTime}
                <h4>Completed tasks:</h4>
                {listReady}
            </>
        )
    }  else {
        return (<div>Нет задач</div>)
    }
}