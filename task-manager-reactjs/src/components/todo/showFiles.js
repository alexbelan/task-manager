import React from 'react'
import folder from '../../img/folder.svg'
import list from '../../img/list.svg'
import { bar } from '../../libs/bar'

export const ShowFiles = ({fileData}) => {
    let showFiles = []
    console.log(folder)
    if (fileData.files !== undefined) {
         fileData.files.map((obj, index) => {
            if (obj.list.length !== 0) {
                showFiles.push(
                    <div className="file-block">
                        <div onClick={bar.clickFile} className="file" data-id={obj.fileId} key={index} ><img src={folder} /><h4>{obj.name}</h4></div>
                        <ul className="lists" data-open="false" data-length={obj.list.length}>
                            {obj.list.map((item, index) => {
                                return <li  className="list" key={index} data-id={item.listId}><img src={list} /><p>{item.name}</p></li>
                            })}
                        </ul>
                    </div>
                )
            } else {
                showFiles.push(
                    <div className="file-block">
                        <div onClick={bar.clickFile} className="file" data-id={obj.fileId} key={index} ><img src={folder} /><h4>{obj.name}</h4></div>
                        <ul className="lists" data-open="false" data-length="1">
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