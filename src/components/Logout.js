import React from 'react'
import fire from './fire'
import {Navigate} from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth();
class Logout extends React.Component{
	componentDidMount(){
		signOut(auth).then(() => {
	      //console.log("Sign-out successful.")
	    }).catch((error) => {
	      console.log("An error happened.")
	    });
	}
	render(){
		return auth?<Navigate to="/"/>: <Navigate to="/login"/>
	}
}


export default Logout