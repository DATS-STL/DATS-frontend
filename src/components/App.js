import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import tools_api from '../api/tools_api';
import ToolSearch from './ToolSearch';

class App extends React.Component {

  state = { alltools: [] };

  onSearchSubmit = async (term) => {
    const  response = await tools_api.get("tt" , {

    })
    console.log (this);
    this.setState ({alltools: response.data.results});
  }

  render() {
    return (
      <div className="App1">
            Learn React - Fuckface2
            <ToolSearch onSumbit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
