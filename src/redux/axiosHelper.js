import axios from "axios";
import { Modal } from 'antd';
import appConst from "../appConst";
import { UserLogout } from './login/loginActions';

var logout = false;

const handleAxiosError = (error) => {
    if (error.response && error.response.status === 401) {
        if (!logout) {
            logout = true;
            Modal.confirm({
                title: 'Error',
                content: "Session expired, Please relogin.",
                cancelButtonProps: { hidden: true },
                onOk: () => {
                    UserLogout();
                    window.location.reload();
                }
            });
        }
    }
    else {
        console.error(error.message);
        return { msg: error.message };
    };
};

export const handleAxiosGet = async (url, params) => {
    try {
        let config = {
            method: "get",
            url: appConst.apiBaseUrl + url,
            params: params,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json"
            },
        };

        const response = await axios(config);
        return { data: response.data };

    }
    catch (error) {
        const errMsg = handleAxiosError(error);
        return { data: errMsg };
    };
};

export const handleAxiosPost = async (url, contentType, data) => {
    try {
        let config = {
            method: "post",
            url: appConst.apiBaseUrl + url,
            data: data,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
                "Content-Type": contentType
            },
        };

        const response = await axios(config);
        return { data: response.data };

    }
    catch (error) {
        const errMsg = handleAxiosError(error);
        return { data: errMsg };
    };
};

