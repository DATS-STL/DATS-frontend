import React from 'react';

class ToolSearch extends React.Component {
    state = {
        search_term: 'For example, 3 or 5',
        //fe_welcome_msg: 'some sort of initial welcome msg'
    };

    render () {
        return (
            <div className="ui segment">
                <form className ="ui form">
                    <div>
                        <label>Enter the tool ID you'd like to retrieve:<br></br></label>
                        <input
                            type="text"
                            value={this.state.search_term}
                            onChange={(e) => this.setState({search_term: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default ToolSearch;
