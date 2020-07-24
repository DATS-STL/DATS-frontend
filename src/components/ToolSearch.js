import React from 'react';

class ToolSearch extends React.Component {
    state = { search_term: 'find a tool?'};

    render () {
        return (
            <div className="ui segment">
                <form className ="ui form">
                    <div>
                        <label>Enter the tools you'd like to find here, shithead, motherfucker, bitch ass punk:</label>
                    </div>
                </form>
            </div>
        )
    }
}

export default ToolSearch;