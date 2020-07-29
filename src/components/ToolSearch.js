import React from 'react';

class ToolSearch extends React.Component {
    state = {
        search_term: 'For example, Hand Tool',
        //fe_welcome_msg: 'some sort of initial welcome msg'
    };

    render () {
        return (
            <div className="ui segment">
                <form className ="ui form">
                    <div>
                        <label>Enter the type of tools you'd like to find here:<br></br></label>
                        <input
                            type="text"
                            value={this.state.search_term}
                            onChange={(e) => this.setState({term: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default ToolSearch;