import React from 'react'
import folder from '../../img/folder.svg'
import list from '../../img/list.svg'
import add from '../../img/add.svg'
import { useSelector } from 'react-redux'
import AddList from './AddList'

export const ShowFiles = ({fileData, sidebar}) => {
    let showFiles = []
    const fileNewList = useSelector(state => state.app.fileNewList)
    if (fileData.files.length !== 0) {
         fileData.files.map((obj, index) => {
            if (obj.list.length !== 0) {
                showFiles.push(
                    <div className="file-block">
                        <div onClick={sidebar.clickFile} className="file" key={index} >
                            <img src={folder} />
                            <h4>{obj.name}</h4>
                            <div className="add-list"><img className="add-list" src={add} /></div>
                        </div>
                        <ul 
                            className="lists" 
                            data-open="false" 
                            data-length={obj.list.length}
                            data-id={obj.fileId}>
                                {obj.list.map((item, index) => {
                                    return <li 
                                        onClick={sidebar.openList} 
                                        className="list" 
                                        key={index} 
                                        data-id={item.listId}> 
                                        <img src={list} />
                                        <p>{item.name}</p>
                                    </li>
                                })}
                                {obj.fileId == fileNewList &&
                                    <AddList/>
                                }
                        </ul>
                    </div>
                )
            } else {
                showFiles.push(
                    <div className="file-block">
                        <div onClick={sidebar.clickFile} className="file" data-id={obj.fileId} key={index} >
                            <img src={folder} />
                            <h4>{obj.name}</h4>
                            <div className="add-list"><img className="add-list" src={add} /></div>    
                        </div>
                        <ul 
                            className="lists" 
                            data-open="false" 
                            data-length="1"
                            data-id={obj.fileId}>
                            <li className="list not-list"><p>Нет списков</p></li>
                        </ul>
                    </div>
                )
            }
        })
    }

    if (showFiles.length !== 0) {
        return showFiles
    } else {
        return null
    }
}