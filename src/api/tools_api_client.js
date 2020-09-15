import axios from 'axios';


const client = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    json: true

});

class ToolsApiClient {
    getWelcomeDan() {
        return this.perform('get', '/welcome_dan');
    }

    async getToolByID(tool_id) {
        const result = await this.perform('get', '/tools/' + tool_id);
        return result
    }


    //Should be a Private method within ToolsApiClient
    async perform(method, resource) {
        const resp = await client({ method, url: resource });
        console.log('in ToolsApiClient class:', method, resource, resp)
        return resp.data;
    }
}

export default ToolsApiClient;
