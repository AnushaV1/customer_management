import axios from "axios";
const BASE_URL =  process.env.BASE_URL || 'http://localhost:3001';

class CustomerAPI {
    static async request(endpoint, params = {}, verb = "get") {
        console.debug("API Call:", endpoint, params, verb);

        let q;

        if (verb === "get") {
            q = axios.get(
          //  `${BASE_URL}/${endpoint}`, { params: { _token, ...params } });
        `${BASE_URL}/${endpoint}`, { params: {...params } });
        } else if (verb === "post") {
            q = axios.post(
            `${BASE_URL}/${endpoint}`, {...params });
        }else if (verb === "delete") {
            q = axios.delete(
            `${BASE_URL}/${endpoint}`, {});
        }

    
        try {
            return (await q).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async AddNewCustomer(data) {
        console.log(data);
        let res = await this.request(`customers`, data, 'post');
        return res;
    }

    static async getSingleCustomer(customerId) {
        let res = await this.request(`customers/${customerId}`);
        return res.user;
    }
    static async getAllCustomers() {
        let res = await this.request(`customers/`);
        return res.user;
    }

    static async deleteSingleCustomer(customerId) {
        let res = await this.request(`customers/${customerId}`, {}, 'delete');
        return res;
    }

    static async updateSingleCustomer(customerId, data) {
        let res = await this.request(`customers/${customerId}`, data, 'patch');
        return res;
    }
}

export default CustomerAPI;
