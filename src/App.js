import React from 'react';
import fire from './components/fire';
import Login from './components/Login';
import Home from './components/Home';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
class App extends React.Component{
  state={
    user:{},
    name:''
  }
  componentDidMount(){
    this.varify();
  }

  varify=()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setState({user})
      } else {
        this.setState({user:null})
      }
    });
  }
  handleUser=item=>{
    this.setState({
      name:item
    })
  }
  render(){
    return(
      <div>
      {
          this.state.user?(<Home name={this.state.name}/>):
          (<Login data={
            {user:this.handleUser}
          }/>)
      }
      
      </div>
    )
  }
}
export default App;
