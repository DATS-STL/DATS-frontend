import axios from 'axios';


const client = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    json: true

});

class ToolsApiClient {
    async getWelcomeDan() {
        return await client({method: 'get', url: '/welcome_dan'});
    }

    async getToolByID(tool_id) {
        return await client({method: 'get', url: '/tools/' + tool_id});
    }

    //Doing this in 1 line now
    // async perform(method, resource) {
    //     const resp = await client({ method, url: resource });
    //     console.log('in ToolsApiClient class:', method, resource, resp)
    //     return resp.data;
    // }
}

export default ToolsApiClient;
