import React from 'react'
import fire from './fire'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import './Login.css'
const auth=getAuth()
class Login extends React.Component{
	constructor(){
		super();
		this.state={
			email:'',
			password:''
		}
	}
	handleChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	login=()=>{
		signInWithEmailAndPassword(auth,this.state.email,this.state.password)
			.then((userCredential)=>{
				console.log("login user",userCredential)
			}).catch((err)=>{
				alert(err);
			})
	}
	signup=()=>{
		createUserWithEmailAndPassword(auth,this.state.email,this.state.password)
			.then((userCredential)=>{
				console.log("create user",userCredential)
			}).catch((err)=>{
				alert(err);
			})
	}
	render(){
		return(
			<center><div className="main">
				<p><b>Login/SignUp</b></p>
				<p><input 
					className="input"
					type="text" 
					placeholder="Enter email address"
					name="email"
					onChange={this.handleChange}
					/></p>
				<p><input 
					className="input"
					type="password" 
					placeholder="Enter password"
					name="password"
					onChange={this.handleChange}
					/></p>
				<button className="btn-grad" onClick={this.login}>Login</button>&nbsp;&nbsp;
				<p>Dont have an account?<b onClick={this.signup}>SignUp</b></p>
			</div></center>
		)
	}
}
export default Login;