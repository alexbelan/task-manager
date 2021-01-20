import axios from "axios";
import LocalStorageApi from "../api/localStorage";

const instance = axios.create({
    headers: {
        'Authorization': `Bearer ${LocalStorageApi.getToken()}` 
    }
})

export default instance;