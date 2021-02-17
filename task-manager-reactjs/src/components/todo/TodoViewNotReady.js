import React from 'react'

export default function ({todoes, readyTodoClick}) {
    if (todoes.length !== 0) {
        return todoes.map((item, index) => {
            if (item.ready === false) {
                return (
                <div 
                    data-ready={item.ready} 
                    data-index={index} 
                    data-todoid={item.todoId} 
                    key={item.todoId} 
                    onClick={readyTodoClick}>
                        <input type="checkbox" id={"todo" + item.todoId}/>
                        <label for={"todo" + item.todoId}>{item.title}</label>
                </div>)
            }   
        })
    }  else {
        return (<div>Нет задач</div>)
    }
}