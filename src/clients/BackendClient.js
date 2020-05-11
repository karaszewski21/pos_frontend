import axios from 'axios';
// import config from '../config';

export default class BackendClient {
    constructor() {
        this.axios = axios.create({baseURL:'http://localhost:3000'});
    }

    /**
     * @param {string} key
     *
     * @returns {Promise<AxiosResponse<T>>}
     */
    async get(routing, param = '') {
        const data = await this.axios.get(`${routing}/${param}`);
        console.log(data);
        return data;
    }

     /**
     * @param {string} key
     * @param {string} summary
     *
     * @returns {Promise<AxiosResponse<T>>}
     */
    async create(routing,body) {
        return await this.axios.post(`${routing}`, body);
    }
}