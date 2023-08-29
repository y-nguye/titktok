import axios from 'axios';

// Tạo một instance Axios với cài đặt chung
const instanceX = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 5000,
});

export const getX = async (path, optionObj = {}) => {
    const response = await instanceX.get(path, optionObj);
    return response.data;
};
