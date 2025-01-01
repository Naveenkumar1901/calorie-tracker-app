import { handleAxiosPost } from '../axiosHelper';

export const UserLogout = async () => {
    localStorage.clear();
};
