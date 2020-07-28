import axios from 'axios';


const client = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    json: true

});

class ToolsApiClient {
    getWelcomeDan() {
        return this.perform('get', '/welcome_dan');
    }

    async  perform (method, resource) {
        return client({
            method,
            url: resource
        }).then(resp => {
            return resp.data ? resp.data : [];
        })
    }
}

export default ToolsApiClient;