import React from 'react';
import ToolsApiClient from '../../api/tools_api_client';
import Tool from '../Tool/Tool.component';

class ToolSearch extends React.Component {
    state = {
        error_message: 'x',
        search_term: '',
        alltools: ''
    };

    
    onSearchSubmit = async (event) => {
        event.preventDefault();
        const apiClient = new ToolsApiClient();
        try {
            const response = await apiClient.getToolByID(this.state.search_term);
            this.setState ({tool: response.data});
            console.log ('tool = ' , this.state.tool);
            this.setState ({...this.state, error_message: ''});
        } catch (exception) {
            this.setState ({...this.state, error_message: 'shit done broke ' + exception});
            console.log('shit done broke ' , exception);
        }
    }

    render () {
        return (
            <div className="ui segment">
                <form className ="ui form" >
                    <div>
                        <label>Tool Search:<br></br></label>
                        <input
                            type="text"
                            value={this.state.search_term}
                            placeholder='Enter tool here'
                            onChange={(e) => this.setState({search_term: e.target.value})}
                            />
                        <button onClick={this.onSearchSubmit}>Search</button>
                    </div>
                    <div>
                        {(this.state.tool) && <Tool tool={this.state.tool}/> }
                        {this.state.error_message}
                    </div> 
                </form>
            </div>
        )
    }
}

export default ToolSearch;
