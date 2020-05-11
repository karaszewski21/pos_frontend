import BackendClient from '../../BackendClient';


export default class ProductClient extends BackendClient{
    constructor() {
        super();
    }

    /**
     * @param {string} key
     *
     * @returns {Promise<AxiosResponse<T>>}
     */
    async getProduct(id) {

        const {data} = await this.get('admin/product/get', id);

        return data;
    }

     /**
     * @param {string} key
     *
     * @returns {Promise<AxiosResponse<T>>}
     */
    async getProducts() {

        const {data} = await this.get('admin/product/list');

        return data;
    }

     /**
     * @param {string} body
     *
     * @returns {Promise<AxiosResponse<T>>}
     */
    async createProduct(body) {
        return await this.create('admin/product/create', body);
    }
}