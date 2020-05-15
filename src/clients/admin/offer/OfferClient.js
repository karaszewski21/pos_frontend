import BackendClient from '../../BackendClient';


export default class OfferClient extends BackendClient{
    constructor() {
        super();
    }

    /**
     * @param {string} key
     *
     * @returns {Promise<AxiosResponse<T>>}
     */
    async getOffer(id) {

        const {data} = await this.get('admin/offer/get', id);

        return data;
    }

     /**
     * @param {string} key
     *
     * @returns {Promise<AxiosResponse<T>>}
     */
    async getOffers() {

        const {data} = await this.get('admin/offer/list');

        return data;
    }

     /**
     * @param {string} body
     *
     * @returns {Promise<AxiosResponse<T>>}
     */
    async createOffer(body) {
        return await this.create('admin/offer/create', body);
    }
}