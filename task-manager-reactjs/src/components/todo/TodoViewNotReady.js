import React from 'react'
import editIcon from '../../img/edit.svg'

export default function ({todoes, reflist, readyTodoClick}) {
    let listTodoes = todoes.filter(todo => todo.list === +reflist)
    if (listTodoes.length !== 0) {
        return listTodoes.map((item, index) => {
            if (item.ready === false) {
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
                        <div className="edit-todo">
                            <img className="edit-todo" src={editIcon} />
                        </div>
                </div>)
            }   
        })
    }  else {
        return (<div>Нет задач</div>)
    }
}