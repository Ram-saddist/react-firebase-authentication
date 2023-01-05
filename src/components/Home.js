import React from 'react'
import fire from './fire'
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
export default class Home extends React.Component{
	constructor(props){
		super(props);
		this.state={
			user:this.props.name
		}
	}
	componentDidMount(){
		var email=this.state.user;
		var name=email.substring(0,email.lastIndexOf("@"));
		this.setState({
			user:name
		})
	}
	logout=()=>{
		//fire.auth().signOut();
		signOut(auth).then(() => {
	      console.log("Sign-out successful.")
	    }).catch((error) => {
	      console.log("An error happened.")
	    });
	}
	render(){
		return(
			<center><div className="main">
				<p>U are in home page</p>
				<p>Hello Mr.{this.state.user}, You are authorised to access this account</p>
				<button onClick={this.logout}>Logout</button>
			</div></center>
		)
	}
}