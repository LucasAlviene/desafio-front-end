import axios from 'axios';

const api = axios.create({
    headers: {
      "Content-Type": "application/json"
    }
});

api.interceptors.response.use(({data}) => data, (error) => Promise.reject(error));

const getQuestions = async(amount) => {
    return await api.get("https://opentdb.com/api.php?amount="+amount).then(({results}) => results);
}

export default api;
export {getQuestions};