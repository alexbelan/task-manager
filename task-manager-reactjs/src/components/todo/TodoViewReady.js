import React from 'react'

export default function ({todoes, readyTodoClick}) {
    let readyTodoes = []
    if (todoes.length !== 0) {
        todoes.map((item, index) => {
            if (item.ready === true) {
                readyTodoes.push(
                <div 
                    data-ready={item.ready} 
                    data-index={index} 
                    data-todoid={item.todoId} 
                    key={item.todoId} 
                    onClick={readyTodoClick}>
                        <input type="checkbox" id={"todo" + item.todoId} checked/>
                        <label for={"todo" + item.todoId}>{item.title}</label>
                </div>
                )
            }   
        })
    }
    if (readyTodoes.length !== 0) {
        return (
            <>
                <hr/>
                {readyTodoes}
            </>
        )
    } else {
        return ''
    }
}