import React from 'react';
import './App.css';
//import { render } from '@testing-library/react';
import ToolsApiClient from '../api/tools_api';
import ToolSearch from './ToolSearch';

class App extends React.Component {

//state = { alltools: [] };
state = {
      fe_welcome_msg: 'Welcome Every1'
};

  onSearchSubmit = async (term) => {
    // const  response = await tools_api.get("" , {

    // })
    console.log (this);
    // this.setState ({alltools: response.data.results});
  }

  async componentDidMount(){
    this.apiClient = new ToolsApiClient();
    this.apiClient.getWelcomeDan().then((welcome_msg) =>
      this.setState ({...this.state, welcome_msg: welcome_msg})
    )
  }


  render() {
    console.log ('Console log ' + this.state.welcome_msg)
    return (
      <div className="HomePage">
            <h1>Family Tool Search Application</h1>
            <h2>Welcome Message (from back end): {this.state.welcome_msg}</h2> 
            <h2>Welcome Message (from front end): {this.state.fe_welcome_msg}</h2> 
            <ToolSearch onSumbit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
