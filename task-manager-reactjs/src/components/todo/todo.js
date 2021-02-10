import React, {Component} from "react";
import { connect } from "react-redux";
import LocalStorageApi from "../../api/localStorage";
import { DOMEN_SERVER, DOMEN_SITE } from "../../config/const";
import instance from "../../config/instance";
import {clearUserData, getUserData} from "../../redux/actions/userActions"
import {getFile} from "../../redux/actions/todoActions"
import Sidebar from "./sidebar";

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
    }

    logOut() {
        this.props.clearUserData()
        LocalStorageApi.deleteToken()
        window.location.href = DOMEN_SITE + "/auth"
    }

    render(h) {
        return (
            <>
                <h1>Добро пожаловать {this.props.user.username}</h1>
                <button onClick={this.logOut.bind(this)}>Log Out</button>
                <div className="todo-app">
                    <Sidebar/>
                </div>
            </>
        )
    }
} 

const mapStateToProps = state => {
    return {
        user: state.user,
        todo: state.todo
    }
}

const mapDispatchToProps = {
    getUserData,
    clearUserData,
    getFile,
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo)