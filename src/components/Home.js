import React from 'react'
import fire from './fire'
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
export default class Home extends React.Component{
	constructor(props){
		super(props);
		this.state={
			user:""
		}
	}
	componentDidMount(){
		
	}
	
	render(){
		return(
			<center><div className="main">
				<p>U are in home page</p>
				<p>Hello Mr.{this.state.user}, You are authorised to access this account</p>
				
			</div></center>
		)
	}
}