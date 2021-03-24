import React, {Component} from "react";
import { connect } from "react-redux";
import LocalStorageApi from "../../api/localStorage";
import { DOMEN_SERVER, DOMEN_SITE } from "../../config/const";
import instance from "../../config/instance";
import {clearUserData, getUserData} from "../../redux/actions/userActions"
import {getFile} from "../../redux/actions/fileActions"
import {getLists} from "../../redux/actions/listActions"
import {getTodoes} from "../../redux/actions/todoActions"
import Sidebar from "./sidebar";
import TodoesView from "./TodoesView";
import EditWindow from "./EditWindow";

class ToDo extends Component {

    constructor(props) {
        super(props)
        instance.get(DOMEN_SERVER + "/auth/user").then((res) => {
            this.props.getUserData(res.data)
        }).catch(() => {
            LocalStorageApi.deleteToken()
            window.location.href = DOMEN_SITE + "/auth"
        })
        this.props.getFile()
        this.props.getLists()
        this.props.getTodoes()
    }

    render(h) {
        return (
            <>
                <div className="todo-app">
                    {this.props.edit === true &&
                        <EditWindow/>
                    }
                    <Sidebar/>
                    <TodoesView/>
                </div>
            </>
        )
    }
} 

const mapStateToProps = state => {
    return {
        user: state.user,
        todo: state.todo,
        edit: state.app.editWindow
    }
}

const mapDispatchToProps = {
    getUserData,
    clearUserData,
    getFile,
    getLists,
    getTodoes,
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo)