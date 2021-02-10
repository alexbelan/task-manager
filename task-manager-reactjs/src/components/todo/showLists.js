import React from 'react'
import folder from '../../img/folder.svg'
import listImg from '../../img/list.svg'
import { bar } from '../../libs/bar'

export const ShowLists = ({fileData}) => {
    console.log(fileData.list_no_file)
    let showList = []
    if (fileData.list_no_file !== undefined) {
        fileData.list_no_file.map((obj, index) => {
            showList.push(<li className="list" key={index} data-id={obj.listId}><img src={listImg} />{obj.name}</li>)
        })
    }

    if (showList.length === 0) {
        return (
            <div>
                <div onClick={bar.clickFile} className="file" ><img src={folder} /><h4>Другие списки</h4></div>
                <ul className="lists" data-open="false" data-length={showList.length}>
                    <li>Нет Списков</li>
                </ul>
            </div>
        )
    } else {    
        return (
            <div className="file-block">
                <div onClick={bar.clickFile} className="file" ><img src={folder} /><h4>Другие списки</h4></div>
                <ul className="lists" data-open="false" data-length={showList.length}>
                    {showList}
                </ul>
            </div>
        )
    }
}