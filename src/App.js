import React from 'react'
import fire from './components/fire'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Logout from './components/Logout';
import Header from './components/Header'
import NotFound from './components/NotFound';
import './App.css'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
class App extends React.Component {
  state={
    user:{},
    name:''
  }
  componentDidMount(){
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setState({user})
      } else {
        this.setState({user:null})
      }
    });
  }
  render(){
    console.log("app1 component",this.state.user)
    return (
        <div>
          {
              this.state.user?(
                   <BrowserRouter>
                      <Header/>
                      <Routes>
                        <Route path="/" element={<Home email={this.state.user.email}/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/logout" element={<Logout/>}/>
                        <Route path="*" element={<NotFound/>}/>
                      </Routes>
                    </BrowserRouter>
                ):(<Login/>)
          }
        </div>
    );
  }
}

export default App;
