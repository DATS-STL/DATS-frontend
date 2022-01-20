import React from "react";
import ToolSearch from "../ToolSearch/ToolSearch.component";
import ToolsApiClient from '../../api/tools_api_client';
import Navbar from "../Navbar/Navbar.component";
import Logoff from "../Logoff/Logoff.component";
import ManageTools from "../ManageTools/ManageTools.component";
import ManageProfile from "../ManageProfile/ManageProfile.component";

class HomePage extends React.Component {

    state = {
        fe_welcome_msg: 'Welcome Every1'
    };
  

  
    async componentDidMount(){
        const apiClient = new ToolsApiClient();

        try {
          const be_welcome_msg = (await apiClient.getWelcomeDan()).data;
          // const be_welcome_msg = 'Test message devliered from back end';
          console.log('back end welcome msg = ' + be_welcome_msg);
          this.setState ({...this.state, welcome_msg: be_welcome_msg})
        } catch (e) {
          this.setState ({...this.state, welcome_msg: 'shit done broke ' + e});
          console.log('shit done broke ' , e);
        }
    }

    render () {
        return (
            <div className="HomePage container">
                <br/><br/>
                <Navbar /><br />
                <Logoff /><ManageProfile />
                <h1>Family Tool Search Application</h1>
                <h2>Welcome Message (from back end): {this.state.welcome_msg}</h2>
                <h2>Welcome Message (from front end): {this.state.fe_welcome_msg}</h2>
                <br/><br/>
                <ToolSearch />
                <ManageTools />
            </div>
        )
    }
}

export default HomePage;